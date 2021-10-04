import React, { useEffect, useState } from "react";
import Header from "./_components/_dashboard_header";
import Sidebar from "./_components/_sidebar";
import HomeScreen from "./_components/home.screen";
// import SettingsScreen from "./_components/settings.screen";
import OrdersScreen from "./_components/orders.screen";
// import { useLocation } from "react-router-dom";

const Dashboard = () => {
  // const loc = useLocation();
  // const { path } = loc.state;
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenu = (menuItem) => {
    setActiveMenu(menuItem)
    console.log("==>", menuItem)
  }

  return (
    <div className="dashboard-main">
      <div className="d-flex justify-content-end h-100">
        <Sidebar handleMenu={handleMenu} activeMenu={activeMenu} />
        <div className="dashboard-container pb-4">
          <Header />
          {activeMenu === "home" ? (
            <HomeScreen />
          ) : activeMenu === "order" ? (
            <OrdersScreen />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
