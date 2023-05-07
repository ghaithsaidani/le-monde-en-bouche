import {LogoLight} from "../../../../assets/images/index.js";
import {LogoDark} from "../../../../assets/images/index.js";
import MenuIcon from "@mui/icons-material/Menu";
import {useDispatch, useSelector} from "react-redux";
import {isLightState} from "../../../../features/ThemeSlice.jsx";
import {handleChange, isCollapsedState} from "../../../../features/NavbarSlice.jsx";
import {useCallback} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Button} from "@mui/material";


export const Navbar = () => {
    const dispatch = useDispatch()
    const isLight = useSelector(isLightState)
    const isCollapsed = useSelector(isCollapsedState)
    return (
        <nav>
            <img src={isLight ? LogoLight : LogoDark} className="logo" alt="Logo"/>
            <button className={"text-orange-500 text-2xl menu-button"}>
                {
                    isCollapsed ?
                        <AiOutlineClose
                                        onClick={useCallback(() => dispatch(handleChange()), [dispatch])}/>
                        : <AiOutlineMenu
                                         onClick={useCallback(() => dispatch(handleChange()), [dispatch])}/>

                }
            </button>


                <ul className={`nav-ul ${isCollapsed ? 'nav-ul-collapsed' : ''}`}>
                    <li>Acceuil</li>
                    <li>Voyager</li>
                </ul>

        </nav>
    )
}