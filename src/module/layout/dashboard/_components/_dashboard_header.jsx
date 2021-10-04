import React, { useState } from "react";
import images from "../../../../api/images";
import { ImSearch } from "react-icons/im";
import { GoChevronDown } from "react-icons/go";

const Header = () => {
  const [active, setActive] = useState(false);

  const openMenu = () => setActive(!active);

  return (
    <div className="dashboard-header-main px-4">
      <div className="dashboard-header-path">Home</div>
      <div className="dashboard-header-account">
        <div className="dashboard-header-search">
          <span className="search-icon">
            <ImSearch size={20} />
            {/* <img src={images.searchIcon} alt="Search" /> */}
          </span>
          <span>Search</span>
        </div>
        <div className="dashboard-header-notification">
          <img src={images.notificationIcon} alt="Bell" className="img-fluid" />
        </div>
        <div className="dashboard-header-ac-section">
          <div className="dashboard-header-ac" onClick={openMenu}>
            <div className="dashboard-header-ac-icon">BL</div>
            <div className="dashboard-header-ac-name">
              <span>Bamboo Lounge</span>
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
