import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Auth SCSS Start
import "./Components/Footer.scss";
import "./InputBox.scss";
import "./Pages/Sign-in/SignIn.scss";
import "./Pages/Sign-up/SignUp.scss";
import "./Pages/Forgot/Forgot.scss";
import "./index.scss";
// Auth SCSS End

// Dashboard SCSS Start
import "./App.scss";
import "./Pages/Home/Home.scss";
import "./Pages/Settings/Settings.scss";
import "./Pages/Orders/Orders.scss";
// Dashboard SCSS End

import SignInPage from "./Pages/Sign-in/SignIn";
import SignUpPage1 from "./Pages/Sign-up/SignUp-1";
import SignUpPage2 from "./Pages/Sign-up/SignUp-2";
import Forgot from "./Pages/Forgot/Forgot";
import OTPScreen from "./Pages/Forgot/OTP";
import CreatePassword from "./Pages/Password/CreatePassword";
import PasswordReset from "./Pages/Password/PasswordReset";
import OrdersPage from "./Pages/Orders/Orders";
import SettingsPage from "./Pages/Settings/SettingsScreen";
import Header from "./Components/Header";
import HomePage from "./Pages/Home/HomePage";
import Sidebar from "./Components/Sidebar";

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

  const [activeMenu, setActiveMenu] = useState("");
  const [activeSidebar, setActiveSidebar] = useState(false);

  const handleMenu = (menuItem) => {
    setActiveMenu(menuItem);
  };

  const handleSideBar = () => setActiveSidebar(!activeSidebar);

  return (
    <div>
      <BrowserRouter>
        <div className="dashboard-main">
          <div className="d-flex justify-content-end h-100">
            <Sidebar
              handleMenu={handleMenu}
              activeMenu={activeMenu}
              activeSidebar={activeSidebar}
              handleSideBar={handleSideBar}
            />
            <div className="dashboard-container pb-4">
              <Header handleSideBar={handleSideBar} />
              <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route exact path="/auth/sign_in" component={SignInPage} />
                <Route exact path="/auth/sign_up1" component={SignUpPage1} />
                <Route exact path="/auth/sign_up2" component={SignUpPage2} />
                <Route exact path="/orders" component={OrdersPage} />
                <Route exact path="/settings" component={SettingsPage} />
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
                <Route exact path="*" to={SignInPage} />
              </Switch>
            </div>
          </div>
        </div>
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
