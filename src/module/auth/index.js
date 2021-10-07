import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { PublicRoutes } from "../../routes/navigation";
import SignInScreen from "./signin/signin.screen";
import Signup1Screen from "./signup/signup1.screen";
import Signup2Screen from "./signup/signup2.screen";
import ForgotEmailScreen from "./forget/forgot.screen";
import OTPScreen from "./forget/otp.screen";
import SetPasswordScreen from "./setpassword/setpassword.screen";
import PassResetSuccessScreen from "./setpassword/passResetSuccess.screen";

export const AuthPage = () => {
    return (
        <Switch>
            <Route exact path={PublicRoutes.SIGN_IN} component={SignInScreen} />
            <Route exact path={PublicRoutes.SIGN_IN} component={Signup1Screen} />
            <Route exact path={PublicRoutes.SIGN_UP2} component={Signup2Screen} />
            <Route exact path={PublicRoutes.FORGOT_PASSWORD} component={ForgotEmailScreen} />
            <Route exact path={PublicRoutes.OTP} component={OTPScreen} />
            <Route exact path={PublicRoutes.RESET_PASSWORD} component={SetPasswordScreen} />
            <Route exact path={PublicRoutes.PASSWORD_SUCCESS} component={PassResetSuccessScreen} />
            <Redirect to={PublicRoutes.SIGN_IN} />
        </Switch>
    );
};
