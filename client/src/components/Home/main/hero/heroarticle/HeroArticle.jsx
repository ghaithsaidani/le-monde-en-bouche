import {Chicken, Couscous, Dhal, Paella, Pizza, Tajine} from "../../../../../assets/images/dishes/index.js";
import {AiOutlineCompass} from "react-icons/all.js";

export const HeroArticle = () => {

    const dishes = [
        {
            src: Paella,
            alt: "Paella"
        },
        {
            src: Chicken,
            alt: "Chiken chow mein"
        },
        {
            src: Tajine,
            alt: "Tajine Marocain"
        },
        {
            src: Pizza,
            alt: "Pizza"
        },
        {
            src: Dhal,
            alt: "Dhal"
        },
    ]
    return (
        <article>
            <div className="description">
                <h2>Embarquez<span>Pour un voyage culinaire</span></h2>
                <p>Avec une variété de plats et de recettes proposés, vous pouvez découvrir de nouveaux goûts et des
                    délices
                    culinaires que vous n'auriez jamais pensé possibles. Qu'il s'agisse de mets traditionnels ou de
                    créations
                    gastronomiques innovantes, cette application vous fera voyager à travers des cultures et des
                    cuisines
                    diverses, pour satisfaire toutes vos envies gourmandes.</p>
                <button>
                    travel with your stomach!
                    <AiOutlineCompass/>
                </button>
            </div>
            <div className="dishes">
                <ul className="others-dishes">
                    {
                        dishes.map((dish) =>
                                <li key={dish.alt}>
                                    <img src={dish.src} alt={dish.alt}/>
                                </li>
                            )
                    }


                </ul>
                <img src={Couscous} alt="couscous"/>
            </div>
        </article>
    )
}