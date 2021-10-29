import React, { useEffect, useState } from "react";
import HomePage from "../Pages/Home/HomePage";
// import SettingsScreen from "./_components/settings.screen";
import OrdersPage from "../Pages/Orders/OrdersPage";
import SettingsPage from "../Pages/Settings/SettingsPage";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {

  const [activeMenu, setActiveMenu] = useState("");
  const [activeSidebar, setActiveSidebar] = useState(false);

  useEffect(() => {
    setActiveMenu("Home");
  }, []);

  const handleSideBar = () => setActiveSidebar(!activeSidebar);

  return (
    <div className="dashboard-main">
      <div className="d-flex justify-content-end h-100">
        <Sidebar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          activeSidebar={activeSidebar}
          handleSideBar={handleSideBar}
        />
        <div className="dashboard-container pb-4">
          <Header handleSideBar={handleSideBar} title={activeMenu} />
          {activeMenu === "Home" ? (
            <HomePage />
          ) : activeMenu === "orders" ? (
            <OrdersPage />
          ) : activeMenu === "General Settings" ? (
            <SettingsPage />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
