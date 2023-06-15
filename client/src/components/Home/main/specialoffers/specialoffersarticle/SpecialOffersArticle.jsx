import {Typography} from "@mui/material";
import {Chicken, Couscous, Dhal, Pizza} from "../../../../../assets/images/index.js";
import {MealCard} from "./mealcard/MealCard.jsx";

export const SpecialOffersArticle = () => {
    const cards = [
        {
            name: 'Couscous',
            img: Couscous,
            rate: '4.5',
            price: "25",
            description: 'Le couscous tunisien : délice authentique.'
        },
        {
            name: 'Pizza Italienne',
            img: Pizza,
            rate: '4.8',
            price: "30",
            description: 'La pizza italienne : une explosion de saveurs et de traditions.'
        },
        {
            name: 'Chicken Chow Mein',
            img: Chicken,
            rate: '4.2',
            price: "20",
            description: 'Chicken chow mein chinois : savoureux et réconfortant.'
        },
        {
            name: 'Dhal',
            img: Dhal,
            rate: '5.0',
            price: "28",
            description: 'Dhal indien : lentilles épicées et crémeuses.'
        }
    ]
    return (<article>
        <div className={"description"}>
            <Typography variant={"h2"}>Offres<span> Speciales </span>D&apos;aujourdhui</Typography>
            <Typography varian={"body1"} sx={{marginTop: 20}}>Découvrez les offres de repas spéciales d'aujourd'hui
                ! Savourez une
                sélection
                alléchante de plats préparés avec soin, allant des mets traditionnels aux créations culinaires
                innovantes.</Typography>
        </div>
        <ul className={"cards"}>
            {cards.map(card=>(
                <li key={card.name}>
                    <MealCard {...card}/>
                </li>
            ))}
        </ul>

    </article>)
}