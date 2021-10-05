import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import images from "../../../../api/images";
import { MdClose } from "react-icons/md";

const Sidebar = ({ activeMenu, handleMenu, activeSidebar, handleSideBar }) => {
  const location = useLocation();

  return (
    <div className={!activeSidebar ? "" : "sidebar-bg"}>
      <div
        className={
          !activeSidebar ? "sidebar-main px-4" : "sidebar-main active px-4"
        }
      >
        <div className="mt-5 position-relative sidebar-logo">
          <img src={images.logo} alt="" />
          <div onClick={handleSideBar} className="d-flex d-md-none">
            <MdClose />
          </div>
        </div>
        <div className="sidebar-menu">
          <ul className="mt-5">
            <li
              className={location?.state?.menu === "Home" ? "active" : ""}
              onClick={() => {
                handleMenu("Home");
                handleSideBar();
              }}
            >
              <div>
                <span>
                  <img src={images.homeMenu} alt="Home" className="img-fluid" />
                </span>
                <span>Home</span>
              </div>
            </li>

            <li
              className={location?.state?.menu === "Orders" ? "active" : ""}
              onClick={() => {
                handleMenu("Orders");
                handleSideBar();
              }}
            >
              <div>
                <span>
                  <img
                    src={images.orderMenu}
                    alt="Order"
                    className="img-fluid"
                  />
                </span>
                <span>Orders</span>
              </div>
              <div>1</div>
            </li>
            <li>
              <div>
                <span>
                  <img
                    src={images.feedbackMenu}
                    alt="Feedback"
                    className="img-fluid"
                  />
                </span>
                <span>Feedback</span>
              </div>
            </li>
            <li>
              <div>
                <span>
                  <img
                    src={images.agentsMenu}
                    alt="Agent"
                    className="img-fluid"
                  />
                </span>
                <span>Agents</span>
              </div>
            </li>
            <li
              className={location?.state?.menu === "General Settings" ? "active" : ""}
              onClick={() => {
                handleMenu("General Settings");
                handleSideBar();
              }}
            >
              <div>
                <span>
                  <img
                    src={images.settingMenu}
                    alt="Setting"
                    className="img-fluid"
                  />
                </span>
                <span>Settings</span>
              </div>
            </li>
            <li>
              <div>
                <span>
                  <img
                    src={images.logoutMenu}
                    alt="Logout"
                    className="img-fluid"
                  />
                </span>
                <span>Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
