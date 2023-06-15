import './Footer.modules.scss'
import {Stack, Typography} from "@mui/material";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/all.js";
import {useSelector} from "react-redux";
import {isLightState} from "../../../features/ThemeSlice.jsx";

export const Footer = () => {
    const islight=useSelector(isLightState)
    const socials = [
        {
            name:'facebook',
            link: 'https://www.facebook.com/gh.saidani',
            icon: <FaFacebookF/>
        },
        {
            name:'instagram',
            link: 'https://www.facebook.com/gh.saidani',
            icon: <FaInstagram/>
        },
        {
            name:'twitter',
            link: 'https://www.facebook.com/gh.saidani',
            icon: <FaTwitter/>
        },
    ];
    return (
        <footer id={"contacts"}>
            <div className={"socials"}>
                <Typography variant={"h3"} color={"primary"}>Le monde en bouche</Typography>
                <Typography variant={"body1"}>Vous pouvez decouvrir plus sur notre application en visitant nos reseaux
                    sociaux.</Typography>
                <ul>
                    {socials.map((social) => (
                        <li key={social.name} className={!islight ? 'dark-theme':''}>
                            <a href={social.link} target={"_blank"}>
                                {social.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}