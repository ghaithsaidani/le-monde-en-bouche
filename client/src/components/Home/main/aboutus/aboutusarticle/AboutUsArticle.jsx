import {AboutUsImage, Availability, OnlineCommand, PreReservation} from "../../../../../assets/images/index.js";
import {Typography} from "@mui/material";
import {AboutUsService} from "./aboutusservice/AboutUsService.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changetheme, isLightState} from "../../../../../features/ThemeSlice.jsx";

export const AboutUsArticle = () => {
    const services = [
        {
            img: OnlineCommand,
            description: 'Commande en ligne'
        },
        {
            img: PreReservation,
            description: 'Pré-réservation'
        },
        {
            img: Availability,
            description: 'Service 24/7'
        },
    ]
    const dispatch=useDispatch()
    const theme=useSelector(isLightState)
    return (
        <article>
            <img src={AboutUsImage} alt={"aboutus"}/>
            <div className={"description"}>
                <Typography variant={"h2"}>Nous sommes <span> plus </span> qu&apos;un
                    service <span> multiple </span></Typography>
                <Typography variant={"body1"}>Avec une variété de plats et de recettes proposés, vous pouvez découvrir
                    de nouveaux goûts et des délices culinaires que vous n'auriez jamais pensé possibles. Qu'il s'agisse
                    de mets traditionnels ou de créations gastronomiques innovantes, cette application vous fera voyager
                    à travers des cultures et des cuisines diverses, pour satisfaire toutes vos envies
                    gourmandes.</Typography>
                <div className={"services"}>
                    {services.map((item) => (
                        <AboutUsService {...item} key={item.description}/>
                    ))}
                </div>
                <a href={"#hero"}>
                    <button onClick={()=>dispatch(changetheme())}> ََÀ Propos de Nous</button>
                </a>
            </div>
        </article>
    )
}