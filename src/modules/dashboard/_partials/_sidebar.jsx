import React from "react";
import { useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";

import {
  logo,
  homeMenu,
  orderMenu,
  feedbackMenu,
  agentsMenu,
  settingMenu,
  logoutMenu,
} from "../../../assets/img";

const Sidebar = ({ activeMenu, handleMenu, activeSidebar, handleSideBar }) => {
  const location = useLocation();

  return (
    <div
      className={"h-full bg-white p-4 transition-all ease-linear duration-500"}
    >
      {/* Brand Logo */}
      <div>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div onClick={handleSideBar} className="flex md:hidden">
          <MdClose />
        </div>
      </div>
      {/* Sidebar Items */}
      <div className="sidebar-menu">
        <ul className="mt-5">
          {/* Home */}
          <li
            className={location?.state?.menu === "Home" ? "active" : ""}
            onClick={() => {
              handleMenu("Home");
              handleSideBar();
            }}
          >
            <div>
              <span>
                <img src={homeMenu} alt="Home" className="img-fluid" />
              </span>
              <span>Home</span>
            </div>
          </li>
          {/* Orders */}
          <li
            className={location?.state?.menu === "Orders" ? "active" : ""}
            onClick={() => {
              handleMenu("Orders");
              handleSideBar();
            }}
          >
            <div>
              <span>
                <img src={orderMenu} alt="Order" className="img-fluid" />
              </span>
              <span>Orders</span>
            </div>
            <div>1</div>
          </li>
          {/* Feedback */}
          <li
            className={location?.state?.menu === "Feedback" ? "active" : ""}
            onClick={() => {
              handleMenu("Feedback");
              handleSideBar();
            }}
          >
            <div>
              <span>
                <img src={feedbackMenu} alt="Feedback" className="img-fluid" />
              </span>
              <span>Feedback</span>
            </div>
          </li>
          {/* Agents */}
          <li
            className={location?.state?.menu === "Agents" ? "active" : ""}
            onClick={() => {
              handleMenu("Agents");
              handleSideBar();
            }}
          >
            <div>
              <span>
                <img src={agentsMenu} alt="Agent" className="img-fluid" />
              </span>
              <span>Agents</span>
            </div>
          </li>
          {/* Settings */}
          <li
            className={
              location?.state?.menu === "General Settings" ? "active" : ""
            }
            onClick={() => {
              handleMenu("General Settings");
              handleSideBar();
            }}
          >
            <div>
              <span>
                <img src={settingMenu} alt="Setting" className="img-fluid" />
              </span>
              <span>Settings</span>
            </div>
          </li>
          {/* Logout */}
          <li>
            <div>
              <span>
                <img src={logoutMenu} alt="Logout" className="img-fluid" />
              </span>
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
