import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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

import SigninScreen from "./module/layout/auth/signin/signin.screen";
import Signup1Screen from "./module/layout/auth/signup/signup1.screen";
import Signup2Screen from "./module/layout/auth/signup/signup2.screen";
import ForgotEmailScreen from "./module/layout/auth/forget/forgot.screen";
import OTPScreen from "./module/layout/auth/forget/otp.screen";
import SetPasswordScreen from "./module/layout/auth/setpassword/setpassword.screen";
import PassResetSuccessScreen from "./module/layout/auth/setpassword/passResetSuccess.screen";
import Dashboard from "./module/layout/dashboard";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* Authentications - start */}
          <Route exact path="/auth/signin" component={SigninScreen} />
          <Route exact path="/auth/signup1" component={Signup1Screen} />
          <Route exact path="/auth/signup2" component={Signup2Screen} />
          <Route exact path="/auth/forgot" component={ForgotEmailScreen} />
          <Route exact path="/auth/otp" component={OTPScreen} />
          <Route exact path="/auth/reset" component={SetPasswordScreen} />
          <Route
            exact
            path="/auth/success"
            component={PassResetSuccessScreen}
          />
          {/* Authentications - end */}

          {/* Dashboard - start */}
          <PrivateRoute exact path="/" component={Dashboard} />
          {/* Dashboard - end */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
