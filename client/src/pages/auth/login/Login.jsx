import './Login.modules.scss'
import {LoginForm} from "../../../components/auth/login-form/LoginForm.jsx";
import {LoginImage} from "../../../assets/images/index.js";

const Login = () => (
    <main className={"login"}>
        <div className={"left-side"}>
            <LoginForm/>
        </div>
        <img src={LoginImage} alt={"login"}/>
    </main>
);

export default Login;
