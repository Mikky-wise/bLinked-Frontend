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
// Dashboard SCSS End

import Dashboard from "./Components/Dashboard";
import SignInPage from "./Pages/Sign-in/SignIn";
import SignUpPage1 from "./Pages/Sign-up/SignUp1";
import SignUpPage2 from "./Pages/Sign-up/SignUp2";
import Forgot from "./Pages/Forgot/Forgot";
import OTPScreen from "./Pages/Forgot/OTP";
import CreatePassword from "./Pages/Password/CreatePassword";
import PasswordReset from "./Pages/Password/PasswordReset";
import OrdersPage from "./Pages/Orders/OrdersPage";
import SettingsPage from "./Pages/Settings/SettingsPage";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return !localStorage.getItem("accessToken") ? (
          <Route to="/" />
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
          <Route exact path="/" component={SignInPage} />
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
          <PrivateRoute exact path="/Home" component={Dashboard} />
          <Route exact path="/orders" component={OrdersPage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route path="*" to={SignInPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;