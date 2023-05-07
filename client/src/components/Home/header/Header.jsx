import {Button, Stack} from "@mui/material"
import './Header.modules.scss'
import {Navbar} from "./navabar/Navbar.jsx";
import {useDispatch} from "react-redux";
import {changetheme} from "../../../features/ThemeSlice.jsx";
import {useCallback} from "react";


export const Header=()=>{
    // const dispatch=useDispatch()


    return(
        <header>
            <Stack>
                <Navbar/>
                {/*<Button onClick={useCallback(()=>dispatch(changetheme()),[dispatch])}>Hello</Button>*/}
            </Stack>

        </header>
    )
}