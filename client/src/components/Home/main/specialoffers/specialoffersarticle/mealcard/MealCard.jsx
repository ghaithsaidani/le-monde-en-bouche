import {Avatar, AvatarGroup, Button, Typography} from "@mui/material";
import {ChristopherCampbell, JonasKakaroto, SergioDePaulo} from "../../../../../../assets/images/index.js";
import {AiTwotoneStar} from "react-icons/all.js";
import './MealCard.modules.scss'

export const MealCard = (props) => {
    return (
        <div className={"meal-card"}>
            <div className={"card-header"}>
                <div className={"card-img"}><img src={props.img} alt={props.name}/><Typography
                    variant={"body2"}>{props.price}DT</Typography></div>
            </div>
            <div className={"card-content"}>
                <div className={"content-headline"}>
                    <AvatarGroup max={3}>
                        <Avatar alt="Christopher Campbell" src={ChristopherCampbell}/>
                        <Avatar alt="Jonas Kakaroto" src={JonasKakaroto}/>
                        <Avatar alt="Sergio De Paulo" src={SergioDePaulo}/>
                    </AvatarGroup>
                    <div className={"rating"}>
                        <AiTwotoneStar color={"secondary"}/>
                        <Typography variant={"body2"}>({props.rate})</Typography>
                    </div>
                </div>
                <Typography variant={"h5"}>{props.name}</Typography>
                <Typography variant={"body2"}>{props.description}</Typography>
            </div>
            <Button variant={"contained"} color={"primary"}>Commandez Maintenant</Button>
        </div>
    )
}