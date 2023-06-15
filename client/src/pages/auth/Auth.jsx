import './Auth.modules.scss'
import {AuthForm} from "../../components/Auth/auth-form/AuthForm.jsx";
import {LoginImage} from "../../assets/images/index.js";

const Auth = () => (
    <div className={"auth"}>
        <AuthForm/>
        <img src={LoginImage} alt={"login"}/>
    </div>
);

export default Auth;
