import {LogoLight, LogoNavbarCollapsed} from "../../../../assets/images/index.js";
import {LogoDark} from "../../../../assets/images/index.js";
import {useDispatch, useSelector} from "react-redux";
import {isLightState} from "../../../../features/ThemeSlice.jsx";
import {handleChange, isCollapsedState} from "../../../../features/NavbarSlice.jsx";
import {useCallback} from "react";
import {Button, useMediaQuery, useTheme} from "@mui/material";
import {CiUser, ImUser, RiCloseLine, RiMenu4Line} from "react-icons/all.js";


export const Navbar = () => {
    const dispatch = useDispatch()
    const links=[
        {
            href:"hero",
            text:'Acceuil'
        },
        {
            href:"special-offers",
            text:'Offres Spéciales'
        },
        {
            href:"about-us",
            text:'Pourquoi Nous'
        },
        {
            href:"explore",
            text:'Voyagez'
        },
        {
            href:"contacts",
            text:'Contacts'
        }
    ]
    const isLight = useSelector(isLightState)
    const isCollapsed = useSelector(isCollapsedState)
    const theme = useTheme()
    const smallQuery = useMediaQuery(theme.breakpoints.up("sm"));
    let button = <button className={"menu-button"}>
        {
            isCollapsed ?
                <RiCloseLine
                    onClick={useCallback(() => dispatch(handleChange()), [dispatch])}/>
                : <RiMenu4Line
                    onClick={useCallback(() => dispatch(handleChange()), [dispatch])}/>
        }
    </button>

    return (
        <nav>

            <img src={!isCollapsed ? isLight ? LogoLight : LogoDark : LogoLight  } className="logo" alt="Logo"/>
            {!smallQuery && button}
            <ul className={`nav-ul ${isCollapsed ? 'nav-ul-collapsed' : ''}`}>
                {links.map(link=>(
                    <li key={link.text}><a href={`#${link.href}`}>{link.text}</a></li>
                ))}
                <Button variant={"contained"} color={"primary"} endIcon={<ImUser/>} href="/auth/login">Connecter</Button>
            </ul>

        </nav>
    )
}