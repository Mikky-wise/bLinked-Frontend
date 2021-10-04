import React from "react";
import images from "../../../../api/images";

const Sidebar = ({ activeMenu, handleMenu }) => {
  return (
    <div className="sidebar-main px-4">
      <div className="mt-5">
        <img src={images.logo} alt="" />
      </div>
      <div className="sidebar-menu">
        <ul className="mt-5">
          <li className={activeMenu === "home" ? "active" : ""} onClick={() => handleMenu("home")}>
            <div>
              <span>
                <img src={images.homeMenu} alt="Home" className="img-fluid" />
              </span>
              <span>Home</span>
            </div>
          </li>

          <li className={activeMenu === "order" ? "active" : ""} onClick={() => handleMenu("order")}>
            <div>
              <span>
                <img src={images.orderMenu} alt="Order" className="img-fluid" />
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
          <li>
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
  );
};

export default Sidebar;
