import React from "react";
import { useHistory } from "react-router";
import { GoChevronDown } from "react-icons/go";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Dropdown } from "react-bootstrap";

import { notificationIcon } from "../assets/img";

const Header = ({ handleSideBar, title }) => {
  const history = useHistory();

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <span
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </span>
  ));

  const handleProfile = () => {
    history.push('/settings');
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    history.push('/');
  }

  return (
    <div className="dashboard-header-main px-md-4 px-2">
      <div className="dashboard-header-path">
        <span onClick={handleSideBar} className="d-flex d-md-none">
          <CgMenuLeftAlt size={28} />
        </span>
        <span className="mx-2 ">
          {title}
        </span>
      </div>
      <div className="dashboard-header-account">
        <div className="dashboard-header-notification">
          <img src={notificationIcon} alt="Bell" className="img-fluid" />
        </div>
        <Dropdown className="d-inline mx-2 border-0">
          <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
            <div className="dashboard-header-ac-section">
              <div className="dashboard-header-ac">
                <div className="dashboard-header-ac-icon">BL</div>
                <div className="dashboard-header-ac-name d-flex align-items-center">
                  <span className="d-none d-md-flex">Bamboo Lounge</span>
                  <GoChevronDown size={18} />
                </div>
              </div>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu className="p-1">
            <Dropdown.Item className="drop-home-profile py-3">
              <div>BL</div>
              <div>
                <span>Bamboo Lounge</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="drop-menu-item" onClick={handleProfile}>Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="drop-menu-item logout" onClick={handleLogout}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <div className="dashboard-header-ac-section">
          <div className="dashboard-header-ac">
            <div className="dashboard-header-ac-icon">BL</div>
            <div className="dashboard-header-ac-name d-flex align-items-center">
              <span className="d-none d-md-flex">Bamboo Lounge</span>
              <GoChevronDown size={18} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
