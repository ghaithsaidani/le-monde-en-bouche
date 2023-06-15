import './AuthForm.modules.scss'
import {Button, Checkbox, FormControlLabel, IconButton, TextField, Typography} from "@mui/material";
import {FaArrowRight, FcGoogle} from "react-icons/all.js";


const InputField = (props) => {
    return (
        <div className={"input-field"}>
            <label htmlFor={props.id}>{props.label}</label>
            <TextField margin={"normal"} id={props.id} type={props.input.type} variant="outlined"
                       placeholder={props.input.placeholder}/>
        </div>
    )
}
export const AuthForm = () => {

    const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
                              viewBox="0 0 48 48">
        <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2aa4f4"></stop>
            <stop offset="1" stopColor="#007ad9"></stop>
        </linearGradient>
        <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
              d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
        <path fill="#fff"
              d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
    </svg>

    const inputs = [
        /*{
            id: "nom",
            label: "Nom",
            input: {
                type: "text",
                placeholder: "abc"
            }
        },*/
        {
            id: "email",
            label: "Email",
            input: {
                type: "email",
                placeholder: "abc@abc.com"
            }
        },
        {
            id: "password",
            label: "Mot de Passe",
            input: {
                type: "password",
                placeholder: "......."
            }
        }
    ]
    return (
        <div className={"auth-form"}>
            <Typography variant={"h2"}>Connexion</Typography>
            <div className={"connecter-ici"}>
                <hr/>
                <Typography variant={"h6"}>Connecter d'ici</Typography>
            </div>
            <ul className={"connect-with"}>
                <li><Button variant={"outlined"} startIcon={<FcGoogle/>}>Continuer avec Google</Button></li>
                <li><Button variant={"contained"} startIcon={facebookIcon}>Continuer avec Facebook</Button></li>
            </ul>
            <Typography variant={"h5"}>Ou</Typography>
            <form>
                {
                    inputs.map((inp) => <InputField key={inp.id} {...inp}/>)
                }
                <FormControlLabel control={<Checkbox/>}
                                  label="Se souvenir de moi"/>
                <IconButton>
                    <FaArrowRight/>
                </IconButton>
                <div className={"register"}>
                    <Typography variant={"body1"}>J&apos;ai pas un compte ?<span> <a href={"/register"}>Enregistrer</a></span></Typography>
                </div>
            </form>
        </div>
    )
}