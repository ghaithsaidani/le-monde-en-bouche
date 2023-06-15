from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin


# Create your models here.

class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user


def create_superuser(self, email, password=None):
    if not email:
        raise ValueError('An email is required.')
    if not password:
        raise ValueError('A password is required.')
    user = self.create_user(email, password)
    user.is_superuser = True
    user.save()
    return user


class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=50, default='')
    prenom = models.CharField(max_length=50, default='')
    email = models.EmailField(max_length=254, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nom', 'prenom']
    objects = AppUserManager()

    def __str__(self):
        return self.username

    class Meta:
        db_table = 'Utilisateur'


class Admin(AppUser):
    class Meta:
        db_table = 'Admin'


class Client(AppUser):
    numtelephone = models.PositiveIntegerField()

    class Meta:
        db_table = 'Client'


class Historique(models.Model):
    date = models.DateField(auto_now=False, auto_now_add=False, null=False, blank=False)
    description = models.TextField()
    client = models.OneToOneField(Client, on_delete=models.CASCADE)

    class Meta:
        db_table = 'Historique'
        ordering = ['date']


class Restaurant(models.Model):
    nom = models.CharField(max_length=50, default='')
    adresselocale = models.CharField(max_length=50, default='')
    numtelephone = models.PositiveIntegerField()
    menu = ArrayField(models.CharField(max_length=500), default=list)
    photo = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=None)
    favoris = models.BooleanField()
    typecuisine = models.CharField(max_length=50, default='')
    note = models.PositiveIntegerField()
    statut = models.BooleanField()

    class Meta:
        db_table = 'Restaurant'


class Plat(models.Model):
    nom = models.CharField(max_length=50, default='')
    photo = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=None)
    paysdorigine = models.CharField(max_length=50, default='')
    histoire = models.TextField()
    prix = models.DecimalField(max_digits=5, decimal_places=2)
    restaurant = models.ManyToManyField(Restaurant)

    class Meta:
        db_table = 'Plat'
        ordering = ['prix']


class Recette(models.Model):
    nom = models.CharField(max_length=50, default='')
    ingredient = ArrayField(models.CharField(max_length=500, default=''))
    instruction = models.TextField()
    tempsdepreparation = models.PositiveIntegerField()
    tempsdecuisson = models.PositiveIntegerField()
    photo = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=None)
    note = models.PositiveIntegerField()
    difficulte = models.CharField(max_length=50, default='')
    plat = models.OneToOneField(Plat, on_delete=models.CASCADE)

    class Meta:
        db_table = 'Recette'


class Commande(models.Model):
    date = models.DateField(auto_now=False, auto_now_add=False)
    heure = models.TimeField(auto_now=False, auto_now_add=False)
    adresselivraison = models.CharField(max_length=200)
    statut = models.CharField(max_length=50, default='')
    plat = models.ForeignKey(Plat, on_delete=models.CASCADE)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    # classe associative
    class Meta:
        db_table = 'Commande'


class Paiement(models.Model):
    montant = models.DecimalField(max_digits=5, decimal_places=2)
    type_paiement = models.CharField(max_length=10, choices=[('en_ligne', 'En ligne'), ('en_espece', 'En espèce')])
    commande = models.OneToOneField(Commande, on_delete=models.CASCADE)

    class Meta:
        db_table = 'Paiment'
