import {Avatar, Button, Chip, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {ChipAvatar, HeroImage, HeroImageDektop, HeroLine} from "../../../../../assets/images/index.js";

export const HeroArticle = () => {
    const theme = useTheme()
    const smallQuery = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <article>
            <img src={smallQuery ? HeroImageDektop : HeroImage} alt={"hero"}/>
            <div className={"description"}>
                <Chip
                    avatar={<Avatar alt="Natacha" src={ChipAvatar}/>}
                    label="Les âmes se confient en nous"
                    color={"primary"}
                    sx={{marginTop: 40}}
                />
                <div className={"paragraph"}>
                    <Typography variant="h2"><span>Embarquez</span> Pour un voyage <span>Culinaire</span></Typography>
                    <img src={HeroLine} alt={"Hero Line"}/>
                    <Typography variant={"body1"}>Découvrez les saveurs du monde en un clin d'œil avec "Le Monde en
                        Bouche" ! Préparez-vous à un voyage gustatif inoubliable, sans quitter votre pays !</Typography>
                </div>
            </div>
        </article>
    )
}