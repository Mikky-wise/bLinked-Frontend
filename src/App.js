import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Auth SCSS Start
import "./assets/scss/auth/_footer.scss";
import "./assets/scss/auth/_input_box.scss";
import "./assets/scss/auth/_signin.scss";
import "./assets/scss/auth/_signup.scss";
import "./assets/scss/auth/_forgot.scss";
import "./assets/scss/auth/_index.scss";
// Auth SCSS End

// Dashboard SCSS Start
import "./assets/scss/dashboard/_index.scss";
import "./assets/scss/dashboard/_home.scss";
import "./assets/scss/dashboard/_settings.scss";
import "./assets/scss/dashboard/_orders.scss";
// Dashboard SCSS End

import Dashboard from "./Components/Dashboard";
import SignInPage from "./Pages/Sign-in/SignIn";
import SignUpPage1 from "./Pages/Sign-up/SignUp-1";
import SignUpPage2 from "./Pages/Sign-up/SignUp-2";
import Forgot from "./Pages/Forgot/Forgot";
import OTPScreen from "./Pages/Forgot/OTP";
import CreatePassword from "./Pages/Password/CreatePassword";
import PasswordReset from "./Pages/Password/PasswordReset";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return !localStorage.getItem("accessToken") ? (
          <Route to="/auth/signin" />
        ) : (
          children
        );
      }}
    />
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/auth/sign_in" component={SignInPage} />
          <Route exact path="/auth/sign_up1" component={SignUpPage1} />
          <Route exact path="/auth/sign_up2" component={SignUpPage2} />
          <Route
            exact
            path="/auth/forgot_password"
            component={Forgot}
          />
          <Route exact path="/auth/otp" component={OTPScreen} />
          <Route exact path="/auth/reset" component={CreatePassword} />
          <Route
            exact
            path="/auth/password_success"
            component={PasswordReset}
          />
          <Route path="*" to={SignInPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

/** AUTH: '/auth/',
    SIGN_IN: '/auth/sign_in',
    SIGN_UP1: '/auth/sign_up1',
    SIGN_UP2: '/auth/sign_up2',
    FORGOT_PASSWORD: '/auth/forgot_password',
    OTP: '/auth/otp',
    RESET_PASSWORD: '/auth/reset',
    PASSWORD_SUCCESS: '/auth/password_success', */

export default App;
