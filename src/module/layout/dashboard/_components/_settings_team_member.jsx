import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { BiChevronDown, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsGridFill, BsThreeDots } from "react-icons/bs";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import images from "../../../../api/images";
import team from "../../../../localdata/team_member.json";

const SettingsTeamMember = () => {
  const [actionModal, setActionModal] = useState(false);
  const [openModalData, setOpenModalData] = useState({});

  const handleToggleModal = (data) => {
    if (!actionModal) {
      setOpenModalData({});
    } else {
      setOpenModalData(data);
    }
    setActionModal(!actionModal);
  };

  const [user, setUser] = useState({
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const [userFocus, setUserFocus] = useState({
    currentpassword: false,
    newpassword: false,
    confirmpassword: false,
  });

  const inputFocus = (name) => {
    setUserFocus({
      ...userFocus,
      [name]: true,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  return (
    <>
      <div className="py-4">
        <div className="settings-user-form-title mt-md-4">Team members</div>
        <div className="settings-user-form-subline">
          <div className="d-md-flex mt-3">
            <div className="settings-team-search-input mt-3 mt-md-0">
              <span>
                <ImSearch size={15} color="#A3A3C2" />
              </span>
              <input type="text" placeholder="Search orders e.g, ID" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="settings-team-filter mx-md-3 mx-0 my-3 my-md-0">
                <button className="px-4">
                  <img src={images.filterIcon} alt="" className="img-fluid" />
                  <span>Filter orders</span>
                </button>
              </div>
              <div className="home-pending-vertical mx-3 d-md-block d-none"></div>
            </div>
          </div>
        </div>
        <div className="settings-team-list-container mt-md-5 mt-3">
          <table className="">
            <thead>
              <tr>
                <th>NAME</th>
                <th>ROLE</th>
                <th>WALLET BALANCE</th>
                <th>PROCESSED ORDERS</th>
                <th></th>
              </tr>
              {/* ₦ */}
            </thead>
            <tbody>
              {team.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                    <td>₦{parseInt(item.balance).toFixed(2)}</td>
                    <td>{item.orders}</td>
                    <td className="setting-team-action">
                      <Dropdown className="d-inline mx-2 border-0">
                        <Dropdown.Toggle
                          as={CustomToggle}
                          id="dropdown-autoclose-true"
                        >
                          <BsThreeDots color="#727E8F" size={23} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item className="settings-team-menu-item">
                            Edit Profile
                          </Dropdown.Item>
                          <Dropdown.Item className="settings-team-menu-item">
                            Add money
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="settings-team-menu-item"
                            style={{
                              color: item.isActive
                                ? "#219653"
                                : "#FF4554",
                            }}
                          >
                            {!item.isActive ? "Deactive" : "Active"}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* <span onClick={() => handleToggleModal(item)}>
                        <BsThreeDots color="#727E8F" size={23} />
                      </span>
                      {item.id === openModalData?.id ? (
                          <ul className="shadow">
                            <li>Edit Profile</li>
                            <li>Add money</li>
                            <li style={{
                              color: openModalData.isActive ? "#219653" : "#FF4554"
                            }}>{!openModalData.isActive ? "Deactive" : "Active"}</li>
                          </ul>
                      ) : null} */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="setting-team-pagination-container px-md-0 d-flex flex-md-row flex-column justify-content-between align-items-center mt-4">
          <div className="my-2">Showing 9 of 290 agents</div>
          <div className="d-md-flex">
            <div className="d-flex align-items-center">
              <div className="order-prev">
                <BiChevronLeft />
              </div>
              <div className="order-page mx-2">
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <span>6</span>
              </div>
              <div className="order-next">
                <BiChevronRight />
              </div>
            </div>
            <div className="d-flex justify-content-between px-1">
              <input type="text" placeholder="10" />
              <div>
                <div className="d-flex justify-content-center">
                  <FaCaretUp />
                </div>

                <div className="d-flex justify-content-center">
                  <FaCaretDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsTeamMember;
