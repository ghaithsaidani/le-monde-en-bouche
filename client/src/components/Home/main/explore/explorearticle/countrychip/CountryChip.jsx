import "./CountryChip.modules.scss";
import {Stack, Typography} from "@mui/material";

export const CountryChip = (props) => {
    return (
        <Stack direction={"row"} borderColor={"text.primary"} className={"country-chip"}>
            <Typography variant={"body2"}>{props.text}</Typography>
            <img src={props.src} alt={props.text}/>
        </Stack>
    );
};
