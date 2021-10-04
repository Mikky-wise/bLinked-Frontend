import React from "react";
import { GoChevronDown } from "react-icons/go";
import { ImSearch } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { BsGridFill, BsThreeDots } from "react-icons/bs";
import images from "../../../../api/images";
import TotalRatingCard from "./_total_rating_card";
import order from "../../../../localdata/pending_order.json";
// import PendingOrderBox from "./_pending_order_box";

const HomeScreen = () => {
  return (
    <>
      <div className="dashboard-subcontainer px-4 mt-4">
        <div className="dashboard-title-container">
          <div className="dashboard-title"> Welcome back, Assurance 🌤</div>
          <div className="dashboard-subtitle mt-2">
            <div className="tag-line">
              Here is what's happening with your business today!
            </div>
            <div className="dashboard-date mt-md-0 mt-4 shadow-sm">
              <div className="d-flex align-items-center">
                <img
                  src={images.calenderIcon}
                  alt="Calender"
                  className="img-fluid"
                />
                <div className="mx-2">Jan 04, 2019 - Dec 04 2019</div>
              </div>
              <div>
                <GoChevronDown size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-complete-registration mt-4 p-4">
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
                  src={images.dashboardVector3}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="d-flex justify-content-start">
                <img
                  src={images.dashboardVector2}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="mx-md-5 mx-4">
              <div className="d-flex justify-content-end">
                <img
                  src={images.dashboardVector1}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4 pb-4">
        <div className="total-rating-container">
          <div className="row px-4 py-4">
            <div className="col-lg-4 px-3">
              <TotalRatingCard
                title="Total Orders"
                total="32,400"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
            <div className="col-lg-4 px-3 mt-md-0 mt-4">
              <TotalRatingCard
                title="Transactions"
                total="32,400"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
            <div className="col-lg-4 px-3 mt-md-0 mt-4">
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

      <div className="px-4 pb-4">
        <div className="home-pending-orders-container p-4">
          <div className="d-md-flex justify-content-between">
            <div className="home-pending-orders-title">
              <span>Pending Orders (0)</span>
              <span>
                <GoChevronDown />
              </span>
            </div>
            <div className="d-md-flex">
              <div className="home-pending-search-input mt-3 mt-md-0">
                <span>
                  <ImSearch size={15} color="#A3A3C2" />
                </span>
                <input type="text" placeholder="Search orders e.g, ID" />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="home-pending-filter my-3 my-md-0">
                  <button>
                    <img src={images.filterIcon} alt="" className="img-fluid" />
                    <span>Filter orders</span>
                  </button>
                </div>
                <div className="home-pending-vertical mx-3 d-md-block d-none"></div>
                <div className="d-flex">
                  <div className="home-pending-order-grid-view">
                    <BsGridFill color="#0F112B" size={20} />
                  </div>
                  <div className="home-pending-order-list-view">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-pending-order-grid-container">
            {/* <div className="row">
              {order.map((item, i) => {
                return (
                  <div className="col-lg-4 mt-3" key={i}>
                    <PendingOrderBox item={item} />
                  </div>
                );
              })}
            </div> */}
            {/* <div className="row py-3">
              <div className="col-12 py-5 home-pending-order-empty">
              <div>
              <img src={images.orderEmpty} alt="No Order" className="img-fluid" />
              </div>
              <div className="mt-3">You have no pending orders yet!</div>
              </div>
            </div> */}
          </div>
          <div className="home-pending-order-list-container">
            <table className="table">
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
                        <BsThreeDots color="#727E8F" size={23} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="home-pending-order-loadmore-btn mt-5 mb-3">
            <button>Load more orders</button>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="d-md-flex">
          <div className="home-location-container px-4 py-4">
            <div className="mt-2 mb-4">Agent Locations</div>
            <div>
              <img src={images.map} alt="" className="img-fluid w-100" />
            </div>
          </div>
          <div className="home-agent-container px-4 py-4 mt-md-0 mt-4">
            <div className="home-agent-title">Agent Analysis</div>
            <div className="home-agent-subtitle my-3">
              Realtime status of registered agent
            </div>
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
    </>
  );
};

export default HomeScreen;
