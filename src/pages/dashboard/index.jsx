import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

// _partial | Dashboard Header
import Header from "../../modules/dashboard/_partials/_dashboard_header.jsx";
// _partial | Dashboard Sidebar
import Sidebar from "../../modules/dashboard/_partials/_sidebar";
// HomeScreen Module
import HomeScreen from "../../modules/dashboard/home/home.screen";
// OrderScreen Module
import OrdersScreen from "../../modules/dashboard/order/orders.screen";
// OrderScreen Module
import FeedbackScreen from "../../modules/dashboard/feedback/feedback.screen";
// OrderScreen Module
import AgentsScreen from "../../modules/dashboard/agents/agents.screen";
// SettingsScreen Module
import SettingsScreen from "../../modules/dashboard/settings/settings.screen";

const Dashboard = () => {
  // The useHistory hook gives you access to the history instance that you may use to navigate.
  const history = useHistory();
  // The useLocation hook returns the location object that represents the current URL.
  const location = useLocation();
  // Get and Set Active Item in Menu
  const [activeMenu, setActiveMenu] = useState("");
  // Get and Set Active Sidebar (Hide or Show)
  const [activeSidebar, setActiveSidebar] = useState(false);
  // Tell React that your component needs to do something after render.
  useEffect(() => {
    // If location state it's null setting the active menu to Home and redirect teh user to home
    if (!location?.state?.menu) {
      setActiveMenu("Home");
      history.push("/", { menu: "Home" });
    }
  }, [history, location.state]);
  // Seting Active Menu after click
  const handleMenu = (menuItem) => {
    setActiveMenu(menuItem);
    history.push("/", { menu: menuItem });
  };

  // Seting Sidebar State
  const handleSideBar = () => setActiveSidebar(!activeSidebar);

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden bg-theme-1">
      <div class="relative md:fixed w-full md:w-2/12 min-h-screen inset-0">
        <Sidebar
          handleMenu={handleMenu}
          activeMenu={activeMenu}
          activeSidebar={activeSidebar}
          handleSideBar={handleSideBar}
        />
      </div>
      <div class="w-full md:w-10/12 ml-auto">
        <Header handleSideBar={handleSideBar} />
        {!location?.state?.menu || location?.state?.menu === "Home" ? (
          <HomeScreen />
        ) : location?.state?.menu === "Orders" ? (
          <OrdersScreen />
        ) : location?.state?.menu === "Feedback" ? (
          <FeedbackScreen />
        ) : location?.state?.menu === "Agents" ? (
          <AgentsScreen />
        ) : location?.state?.menu === "General Settings" ? (
          <SettingsScreen />
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
