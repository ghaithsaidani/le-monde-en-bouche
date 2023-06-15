import {Typography} from "@mui/material";
import './AboutUsService.modules.scss'

export const AboutUsService = (props) => {
	return (
		<div className={"about-us-service"}>
			<img src={props.img} alt={props.description}/>
			<Typography variant={"subtitle1"}>{props.description}</Typography>
		</div>
	)
}