import {Button, useMediaQuery, useTheme} from "@mui/material"
import './Header.modules.scss'
import {Navbar} from "./navabar/Navbar.jsx";
import {useDispatch} from "react-redux";
import {changetheme} from "../../../features/ThemeSlice.jsx";
import {useCallback} from "react";


export const Header=()=>{
    // const dispatch=useDispatch()
    const theme=useTheme()
    const higherThanMediumQuery = useMediaQuery(theme.breakpoints.up("sm"));

    return(
        <header className={`${!higherThanMediumQuery ? '' : ''}`}>
                <Navbar/>
                {/*<Button onClick={useCallback(()=>dispatch(changetheme()),[dispatch])}>Hello</Button>*/}
        </header>
    )
}