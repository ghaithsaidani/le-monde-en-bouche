import './RegisterForm.modules.scss'
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel, FormHelperText,
    IconButton,
    InputAdornment, OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import {FaArrowRight, ImUser} from "react-icons/all.js";
import {InputField} from "../input-field/InputField.jsx";
import {useState} from "react";
import * as yup from "yup";
import axios from "axios";
import {useFormik} from "formik";

export const RegisterForm = () => {


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    let validationschema = yup.object().shape({
        email: yup.string()
            .email("Email invalide")
            .required("Vous pouvez Entrez un Email"),
        nom: yup.string().required("Vous Pouvez Entrez votre Nom"),
        prenom: yup.string().required("Vous Pouvez Entrez votre Prenom"),
        numtelephone: yup.number().required("Vous Pouvez Entrez votre Numéro de Télephone").min(8, 'Numéro de Téléphone doit contenir 8 chiffres').max(8, 'Numéro de Téléphone doit contenir 8 chiffres'),
        password: yup.string()
            .required("Vous pouvez entrez une Mot de Passe"),
        confirmpassword: yup.string()
            .required("Vous pouvez confirmer votre Mot de Passe")/*.oneOf([yup.ref('password')], 'Confirmation du Mot de passe incorrecte')*/,
    })
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFToken";
    axios.defaults.withCredentials = true;

    const client = axios.create({
        baseURL: "http://127.0.0.1:8000",
    });
    const {values, handleSubmit, handleChange, errors, touched} = useFormik({
        initialValues: {
            nom: '',
            prenom: '',
            email: '',
            numtelephone: '',
            password: '',
            confirmpassword: '',
        },
        validateOnChange: true,
        validateOnBlur: false,
        validationSchema: validationschema,
        onSubmit: (values) => {
            client
                .post("/api/login", values)
                .then(function (res) {
                    console.log(res.data);
                    //console.log(Cookies.get('sessionid'))
                });
        }
    });
    const handleClickShowPassword = () => {
        setShowPassword(show => !show)
    }

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(show => !show)
    }

    const inputs = [
        {
            id: "nom",
            label: "Nom",
            input: {
                type: "text",
                placeholder: "abc",
                value: values.nom,
                handleChange: handleChange
            },
            error: {
                condition: touched.nom && Boolean(errors.nom),
                erroMessageCondition: touched.nom && errors.nom,
                Errormsg: errors.nom
            }
        },
        {
            id: "prenom",
            label: "Prénom",
            input: {
                type: "text",
                placeholder: "abc",
                value: values.prenom,
                handleChange: handleChange
            },
            error: {
                condition: touched.prenom && Boolean(errors.prenom),
                erroMessageCondition: touched.prenom && errors.prenom,
                Errormsg: errors.prenom
            }
        },
        {
            id: "email",
            label: "Email",
            input: {
                type: "email",
                placeholder: "abc@abc.com",
                value: values.email,
                handleChange: handleChange
            },
            error: {
                condition: touched.email && Boolean(errors.email),
                erroMessageCondition: touched.email && errors.email,
                Errormsg: errors.email
            }
        },
        {
            id: "numtelephone",
            label: "Numéro de Télephone",
            input: {
                type: "tel",
                placeholder: "12345678",
                value: values.numtelephone,
                handleChange: handleChange
            },
            error: {
                condition: touched.numtelephone && Boolean(errors.numtelephone),
                erroMessageCondition: touched.numtelephone && errors.numtelephone,
                Errormsg: errors.numtelephone
            }
        }
    ]
    const passwords = [
        {
            id: "password",
            label: "Mot de Passe",
            input: {
                type: showPassword ? "text" : "password",
                placeholder: "*******",
                value: values.password,
                handleChange: handleChange,
                hClickShowPassword: handleClickShowPassword,
                sPassword: showPassword
            },
            error: {
                condition: touched.password && Boolean(errors.password),
                erroMessageCondition: touched.password && errors.password,
                Errormsg: errors.password
            }
        },
        {
            id: "confirmpassword",
            label: "Confirmer Mot de Passe",
            input: {
                type: showConfirmPassword ? "text" : "password",
                placeholder: "*******",
                value: values.confirmpassword,
                handleChange: handleChange,
                hClickShowPassword: handleClickShowConfirmPassword,
                sPassword: showConfirmPassword
            },
            error: {
                condition: touched.confirmpassword && Boolean(errors.confirmpassword),
                erroMessageCondition: touched.confirmpassword && errors.confirmpassword,
                Errormsg: errors.confirmpassword
            }
        }
    ]
    return (
        <div className={"register-form"}>
            <div className={"go-to-login"}>
                <a href={"/auth/login"}>
                    <Typography variant={"body2"}>
                        J&apos;ai déja un compte ?
                        <ImUser/>
                    </Typography>
                </a>
            </div>
            <div className={"head"}>
                <Typography variant={"h2"}>Donnez vos Informations</Typography>
                <Typography variant={'body2'}>Nous avons besoin que vous nous aidiez avec quelques informations de base
                    pour la création de votre compte. Voici nos<span> conditions générales</span>. Veuillez les lire
                    attentivement.</Typography>
            </div>
            <form noValidate>
                <div className={"start-inputs"}>
                    {
                        inputs.map((inp) => <InputField key={inp.id} {...inp}/>)
                    }
                </div>
                <div className={"passwords"}>
                    {
                        passwords.map((pass) => <InputField key={pass.id} {...pass}/>)
                    }
                </div>
                <div className={"form-submission"}>
                    <FormControlLabel control={<Checkbox/>}
                                      label={<Typography variant={'body2'}>Je suis d'accord avec <span>les termes et conditions</span></Typography>}/>
                    <Button type={"submit"} variant={"contained"}>
                        S&apos;inscrire
                        <FaArrowRight/>
                    </Button>
                </div>

            </form>
        </div>
    )
}