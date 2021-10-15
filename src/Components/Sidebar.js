import React from "react";
import { MdClose } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { agentsMenu, feedbackMenu, homeMenu, logo, logoutMenu, orderMenu, settingMenu } from "../assets/img";

const Sidebar = ({ activeMenu, handleMenu, activeSidebar, handleSideBar }) => {
  const location = useLocation();

  return (
    <div className={!activeSidebar ? "" : "sidebar-bg"}>
      <div
        className={
          !activeSidebar ? "sidebar-main" : "sidebar-main active"
        }
      >
        <div className="mt-5 position-relative sidebar-logo">
          <img src={logo} alt="" className="img-fluid" />
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
                  <img src={homeMenu} alt="Home" className="img-fluid" />
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
                    src={orderMenu}
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
                    src={feedbackMenu}
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
                    src={agentsMenu}
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
                    src={settingMenu}
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
                    src={logoutMenu}
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
