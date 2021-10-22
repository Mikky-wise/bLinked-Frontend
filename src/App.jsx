import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthPage } from "./module/auth";
import { PublicRoutes, PrivateRoutes } from "./routes/navigation";

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

// Pages
import Board from "./pages/dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={PublicRoutes.AUTH} component={AuthPage} />
          <Route path={PrivateRoutes.HOMEPAGE} component={Board} />
          {/* <Route path={PrivateRoutes.DASHBOARD} component={Dashboard} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
