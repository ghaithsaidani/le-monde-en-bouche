import {Hero} from "./hero/Hero.jsx";
import './Main.modules.scss'
import {SpecialOffers} from "./specialoffers/SpecialOffers.jsx";
import {AboutUs} from "./aboutus/AboutUs.jsx";
import {Explore} from "./explore/Explore.jsx";


export const Main = () => {
	return (
		<main>
			<Hero/>
			<SpecialOffers/>
			<AboutUs/>
			<Explore/>
		</main>
	)
}