import React, { useEffect, useState } from "react";
import Header from "./_components/_dashboard_header";
import Sidebar from "./_components/_sidebar";
import HomeScreen from "./home.screen";
// import SettingsScreen from "./_components/settings.screen";
import OrdersScreen from "./orders.screen";
import { useHistory, useLocation } from "react-router-dom";
import SettingsScreen from "./settings.screen";

const Dashboard = () => {
  const history = useHistory();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSidebar, setActiveSidebar] = useState(false);

  useEffect(() => {
    if (!location?.state?.menu) {
      setActiveMenu("Home");
      history.push("/", { menu: "Home" });
    }
  }, [history, location.state]);

  const handleMenu = (menuItem) => {
    setActiveMenu(menuItem);
    history.push("/", { menu: menuItem });
  };

  const handleSideBar = () => setActiveSidebar(!activeSidebar);

  return (
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
          {!location?.state?.menu || location?.state?.menu === "Home" ? (
            <HomeScreen />
          ) : location?.state?.menu === "Orders" ? (
            <OrdersScreen />
          ) : location?.state?.menu === "General Settings" ? (
            <SettingsScreen />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
