import React, { useState } from "react";
import images from "../../../../api/images";
import { ImSearch } from "react-icons/im";
import { GoChevronDown } from "react-icons/go";
import { useLocation } from "react-router";
import { CgMenuLeftAlt } from "react-icons/cg";

const Header = ({ handleSideBar }) => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  const openMenu = () => setActive(!active);

  return (
    <div className="dashboard-header-main px-md-4 px-2">
      <div className="dashboard-header-path">
        <span onClick={handleSideBar} className="d-flex d-md-none">
          <CgMenuLeftAlt size={28} />
        </span>
        <span className="mx-2 ">
          {!location?.state?.menu || location?.state?.menu === "Home"
            ? "Home"
            : location?.state?.menu}
        </span>
      </div>
      <div className="dashboard-header-account">
        <div className="dashboard-header-search">
          <span className="search-icon">
            <ImSearch size={20} />
            {/* <img src={images.searchIcon} alt="Search" /> */}
          </span>
          <span className="d-none d-md-flex">Search</span>
        </div>
        <div className="dashboard-header-notification">
          <img src={images.notificationIcon} alt="Bell" className="img-fluid" />
        </div>
        <div className="dashboard-header-ac-section">
          <div className="dashboard-header-ac" onClick={openMenu}>
            <div className="dashboard-header-ac-icon">BL</div>
            <div className="dashboard-header-ac-name d-flex align-items-center">
              <span className="d-none d-md-flex">Bamboo Lounge</span>
              <GoChevronDown size={18} />
            </div>
          </div>
          <div className={active ? "dashboard-header-menu" : "d-none"}>
            <ul>
              <li>A</li>
              <li>A</li>
              <li>A</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
