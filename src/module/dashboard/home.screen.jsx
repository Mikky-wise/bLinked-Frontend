import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { ImSearch } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { BsGridFill, BsThreeDots } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { Dropdown } from "react-bootstrap";

import { calenderIcon, dashboardVector1, dashboardVector2, dashboardVector3, filterIcon, orderEmpty, map } from "../../assets/img";
import TotalRatingCard from "./_components/_total_rating_card";
import order from "../../mockData/pending_order.json";
import PendingOrderBox from "./_components/_pending_order_box";

const HomeScreen = () => {
  const [activeView, setActiveView] = useState("grid");

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

  return (
    <div className="main-container">
      <div className="dashboard-subcontainer px-md-4 px-2 mt-4">
        <div className="dashboard-title-container">
          <div className="dashboard-title"> Welcome back, Assurance 🌤</div>
          <div className="dashboard-subtitle mt-2">
            <div className="tag-line">
              Here is what's happening with your business today!
            </div>

            <Dropdown className="d-inline mx-2 border-0">
              <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                <div className="dashboard-date mt-md-0 mt-4 shadow-sm">
                  <div className="d-flex align-items-center">
                    <img
                      src={calenderIcon}
                      alt="Calender"
                      className="img-fluid"
                    />
                    <div className="mx-2">Jan 04, 2019 - Dec 04 2019</div>
                  </div>
                  <div>
                    <GoChevronDown size={18} />
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="p-2">
                <Dropdown.Item className="drop-menu-item">
                  <div className="drop--menu-date-item">
                    <span>LAST 28 DAYS</span>
                    <span>Desc 04, 2019 - Feb 04 2020</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="drop-menu-item">Today</Dropdown.Item>
                <Dropdown.Item className="drop-menu-item">
                  Last 7 days
                </Dropdown.Item>
                <Dropdown.Item className="drop-menu-item">
                  Last 90 days
                </Dropdown.Item>
                <Dropdown.Item className="drop-menu-item">
                  Customize
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="dashboard-complete-registration mt-4 p-3 p-md-4">
          <div className="dashboard-complate-close-icon mx-4">
            <IoClose size={18} color="#332C2C" />
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div>
              <div className="dashboard-complete-title">
                You're off to a great start! 🎉
              </div>
              <div className="dashboard-complete-subtitle mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. You’re are almost setup. 2 out of 5 completed
                already.
              </div>
            </div>
            <div className="dashboard-complate-setup-btn mt-md-0 mt-4">
              <button>Continue to setup</button>
            </div>
          </div>
          <div className="dashboard-complete-vector px-md-5 py-4">
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-end">
                <img
                  src={dashboardVector3}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="d-flex justify-content-start">
                <img
                  src={dashboardVector2}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="mx-md-5 mx-4">
              <div className="d-flex justify-content-end">
                <img
                  src={dashboardVector1}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-md-4 px-2 pt-4 pb-4">
        <div className="total-rating-container">
          <div className="row px-md-4 px-2 py-4">
            <div className="col-lg-4 px-md-3">
              <TotalRatingCard
                title="Total Orders"
                total="32,400"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
            <div className="col-lg-4 px-md-3 mt-md-0 mt-4">
              <TotalRatingCard
                title="Transactions"
                total="32,400"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
            <div className="col-lg-4 px-md-3 mt-md-0 mt-4">
              <TotalRatingCard
                title="Performance"
                total="32,400"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-md-4 px-2 pb-4">
        <div className="home-pending-orders-container p-md-4 p-2">
          <div className="d-md-flex justify-content-between">
            <Dropdown className="d-inline mx-2 border-0">
              <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                <div className="home-pending-orders-title">
                  <span>Pending Orders (0)</span>
                  <span>
                    <GoChevronDown />
                  </span>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="p-2">
                <Dropdown.Item className="drop-menu-item py-3">
                  Pending Orders (0)
                </Dropdown.Item>
                <Dropdown.Item className="drop-menu-item py-3">
                  New Orders (0)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-md-flex">
              <div className="home-pending-search-input mt-3 mt-md-0">
                <span>
                  <ImSearch size={15} color="#A3A3C2" />
                </span>
                <input type="text" placeholder="Search orders e.g, ID" />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="home-pending-filter my-3 my-md-0">
                  <button className="px-4">
                    <img src={filterIcon} alt="" className="img-fluid" />
                    <span>Filter orders</span>
                  </button>
                </div>
                <div className="home-pending-vertical mx-3 d-md-block d-none" />
                <div className="d-flex">
                  <div
                    className={
                      activeView === "grid"
                        ? "home-pending-order-grid-view active"
                        : "home-pending-order-grid-view"
                    }
                    onClick={() => setActiveView("grid")}
                  >
                    <BsGridFill color="#0F112B" size={20} />
                  </div>
                  <div
                    className={
                      activeView === "list"
                        ? "home-pending-order-list-view active"
                        : "home-pending-order-list-view"
                    }
                    onClick={() => setActiveView("list")}
                  >
                    <FcMenu size={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {activeView === "grid" ? (
            <div className="home-pending-order-grid-container">
              {order.length > 0 ? (
                <div className="row">
                  {order.map((item, i) => {
                    return (
                      <div className="col-lg-4 mt-3" key={i}>
                        <PendingOrderBox item={item} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="row py-3">
                  <div className="col-12 py-5 home-pending-order-empty">
                    <div>
                      <img
                        src={orderEmpty}
                        alt="No Order"
                        className="img-fluid"
                      />
                    </div>
                    <div className="mt-3">You have no pending orders yet!</div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="home-pending-order-list-container">
              <table className="mt-4">
                <thead>
                  <tr>
                    <th>CUSTOMER NAME</th>
                    <th>FROM LOCATION</th>
                    <th>TO LOCATION</th>
                    <th>TOTAL AMOUNT</th>
                    <th>STATUS</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* {order.length > 0 ? "" : ""} */}
                  {order.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.from}</td>
                        <td>{item.to}</td>
                        <td>₦{parseInt(item.price).toFixed(2)}</td>
                        <td className="home-pending-order-list-status">
                          <span
                            className="px-2 py-1 rounded-pill"
                            style={{
                              background:
                                item.status === "New"
                                  ? "#FFEBEC"
                                  : item.status === "Enroute Dropoff"
                                  ? "#E9EEFF"
                                  : "#FCF2E3",
                              color:
                                item.status === "New"
                                  ? "#FF4554"
                                  : item.status === "Enroute Dropoff"
                                  ? "#1752FF"
                                  : "#F1872D",
                            }}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <Dropdown className="d-inline mx-2 border-0">
                            <Dropdown.Toggle
                              as={CustomToggle}
                              id="dropdown-autoclose-true"
                            >
                              <BsThreeDots color="#727E8F" size={23} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="p-1">
                              <Dropdown.Item className="drop-menu-item">
                                Edit Agent
                              </Dropdown.Item>
                              <Dropdown.Item className="drop-menu-item">
                                Suspend Agent
                              </Dropdown.Item>
                              <Dropdown.Item className="drop-menu-item logout">
                                Remove Agent
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          <div className="home-pending-order-loadmore-btn mt-5 mb-3">
            <button>Load more orders</button>
          </div>
        </div>
      </div>

      <div className="px-md-4 px-2 pb-4">
        <div className="d-md-flex">
          <div className="home-location-container px-4 py-4">
            <div className="mt-2 mb-4">Agent Locations</div>
            <div>
              <img src={map} alt="" className="img-fluid w-100" />
            </div>
          </div>
          <div className="home-agent-container px-4 py-4 mt-md-0 mt-4">
            <div className="mt-2">
              <div className="home-agent-title">Agent Analysis</div>
              <div className="home-agent-subtitle my-1">
                Realtime status of registered agent
              </div>
            </div>
            <div>
              <div className="home-agent-status-a mt-5">
                <div>
                  <span>300</span>
                  <span>Inactive</span>
                </div>
                <div>
                  <span>130</span>
                  <span>Unavailable</span>
                </div>
              </div>
              <div className="home-agent-status-b mt-4">
                <div>
                  <span>500</span>
                  <span>Available</span>
                </div>
                <div>
                  <span>100</span>
                  <span>Active</span>
                </div>
              </div>
            </div>
            <div className="row home-agent-status mt-5">
              <div className="col-6 mt-2">
                <div></div>
                <div>Available</div>
              </div>
              <div className="col-6 mt-2">
                <div></div>
                <div>Active</div>
              </div>
              <div className="col-6 mt-2">
                <div></div>
                <div>Unavailable</div>
              </div>
              <div className="col-6 mt-2">
                <div></div>
                <div>Inactive</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
