import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Auth SCSS Start
import "./Components/Footer.scss";
import "./assets/scss/auth/_input_box.scss";
import "./Pages/Sign-in/Signin.scss";
import "./Pages/Sign-up/Signup.scss";
import "./Pages/Forgot/Forgot.scss";
import "./index.scss";
// Auth SCSS End

// Dashboard SCSS Start
import "./Components/Dashboard.scss";
import "./Pages/Home/HomePage.scss";
import "./Pages/Settings/SettingsPage.scss";
import "./Pages/Orders/Orders.scss";
import "./Pages/Agents/AgentsPage.scss";
// Dashboard SCSS End

import SignInPage from "./Pages/Sign-in/SignIn";
import SignUpPage1 from "./Pages/Sign-up/SignUp1";
import SignUpPage2 from "./Pages/Sign-up/SignUp2";
import Forgot from "./Pages/Forgot/Forgot";
import OTPScreen from "./Pages/Forgot/OTP";
import CreatePassword from "./Pages/Password/CreatePassword";
import PasswordReset from "./Pages/Password/PasswordReset";
import OrdersPage from "./Pages/Orders/OrdersPage";
import SettingsPage from "./Pages/Settings/SettingsPage";
import HomePage from "./Pages/Home/HomePage";
import AgentsPage from "./Pages/Agents/AgentsPage";
import { GlobalProvider } from './context/GlobalState';
import AlertToast from "./Components/Toast";

const PrivateRoute = ({ ...rest }) => {
    if (!localStorage.getItem("accessToken")) return window.location.assign('/');
    return <Route {...rest} />
};

const App = () => {
    return (
        <GlobalProvider>
            <AlertToast />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SignInPage} />
                    <Route exact path="/auth/sign_up1" component={SignUpPage1} />
                    <Route exact path="/auth/sign_up2" component={SignUpPage2} />
                    <Route exact path="/auth/forgot_password" component={Forgot} />
                    <Route exact path="/auth/otp" component={OTPScreen} />
                    <Route exact path="/auth/reset" component={CreatePassword} />
                    <Route exact path="/auth/password_success" component={PasswordReset} />
                    <PrivateRoute exact path="/home" component={HomePage} />
                    <PrivateRoute exact path="/orders" component={OrdersPage} />
                    <PrivateRoute exact path="/settings" component={SettingsPage} />
                    <PrivateRoute exact path="/agents" component={AgentsPage} />
                    <Route path="*" to={SignInPage} />
                </Switch>
            </BrowserRouter>
        </GlobalProvider>
    );
};

export default App;