import {Hero} from "./hero/Hero.jsx";
import {Explore} from "./explore/Explore.jsx";
import './Main.modules.scss'

export const Main = () => {
	return (
		<main>
			<Hero/>
			<Explore/>
		</main>
	)
}