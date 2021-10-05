import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import images from "../../../api/images";
import TotalRatingCard from "./_components/_total_rating_card";
import order from "../../../localdata/orders.json";
import agentsData from "../../../localdata/agents.json";
import { BsThreeDots } from "react-icons/bs";
import {
  BiChevronLeft,
  BiChevronRight,
  BiDotsVerticalRounded,
  BiChevronDown,
} from "react-icons/bi";
import { FaCaretDown, FaCaretUp, FaSortAlphaDown } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";

const OrdersScreen = () => {
  const [show, setShow] = useState(false);
  const [itemStatus, setItemStatus] = useState("New");
  const [agents, setAgents] = useState("");
  const [agentErr, setAgentErr] = useState(false);
  const [agentsFocus, setAgentsFocus] = useState(false);
  const [searchResult, setSearchResult] = useState(false);

  // const [search, setSearch] = useState("")

  const handleModal = (status) => {
    setSearchResult(false);
    setAgentErr(false);
    setAgents("");
    setShow(!show);
    setAgentsFocus(false);
    if (!show) {
      setItemStatus(status);
    }
  };

  const inputFocus = () => {
    setSearchResult(true);
    // setAgentsFocus(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgents(value);
  };

  const handleConfirm = () => {
    if (!agents) {
      setAgentErr(true);
    } else {
      handleModal();
    }
  };

  return (
    <div className="main-container">
      <div className="px-md-4 px-2 pb-4 mt-4">
        <div className="total-rating-container">
          <div className="row px-4 py-4">
            <div className="col-lg-3 px-md-3">
              <TotalRatingCard
                title="Total Orders"
                total="400"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
            <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
              <TotalRatingCard
                title="Transaction Value"
                total="40"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
            <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
              <TotalRatingCard
                title="Pending Orders"
                total="120"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
            <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
              <TotalRatingCard
                title="Performance"
                total="28"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-md-4 px-2 mb-4">
        <div className="orders-container py-4 ">
          <div className="d-md-flex justify-content-between px-4">
            <div className="d-md-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="orders-filter my-3 my-md-0">
                  <button>
                    <img src={images.filterIcon} alt="" className="img-fluid" />
                    <span>Filter orders</span>
                  </button>
                </div>
              </div>

              <div className="orders-search-input mt-md-0">
                <span>
                  <ImSearch size={15} color="#A3A3C2" />
                </span>
                <input type="text" placeholder="Search orders" />
              </div>
            </div>
          </div>
          <div className="order-list-container mt-4 table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>ORDER VENDOR</th>
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
                      <td className="order-item-name">
                        <span className="d-flex align-items-center">
                          <span>TB</span>
                          {item.name}
                        </span>
                      </td>
                      <td>
                        <span>{item.from}</span>
                      </td>
                      <td>
                        <span>{item.to}</span>
                      </td>
                      <td>
                        <span>₦{parseInt(item.price).toFixed(2)}</span>
                      </td>
                      <td className="order-list-status">
                        <span
                          className="px-2 py-1 rounded-pill"
                          style={{
                            background:
                              item.status === "New"
                                ? "#FFEBEC"
                                : item.status === "Enroute Dropoff" ||
                                  item.status === "Enroute Pickup"
                                ? "#E9EEFF"
                                : item.status === "Cancelled"
                                ? "#F0EFEF"
                                : item.status === "Assigned"
                                ? "#FCF2E3"
                                : "#E7FFEC",
                            color:
                              item.status === "New"
                                ? "#FF4554"
                                : item.status === "Enroute Dropoff" ||
                                  item.status === "Enroute Pickup"
                                ? "#1752FF"
                                : item.status === "Cancelled"
                                ? "#5A5D82"
                                : item.status === "Assigned"
                                ? "#F1872D"
                                : "#288F40",
                          }}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td onClick={() => handleModal(item.status)}>
                        <BsThreeDots color="#727E8F" size={23} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="order-pagination-container px-md-4 d-flex flex-md-row flex-column justify-content-between align-items-center">
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
      </div>

      <div className="px-md-4 px-2 mb-4"></div>

      <Modal show={show} onHide={handleModal} centered size="lg">
        <Modal.Header className="d-flex justify-content-between order-modal-header py-4">
          <div className="mx-md-4">Order Details</div>
          <div className="mx-md-4" onClick={handleModal}>
            <MdClose />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="my-4 px-md-4">
            <div className="order-modal-main">
              <div className="order-modal-id">Order ID 15285046</div>
              <div className="order-modal-from-price mt-2">
                <span>
                  From
                  <span> Isolo Ire-Akari Estate &bull; 12mins ago</span>
                </span>
                <span>₦850,000.00</span>
              </div>
              <div className="order-modal-to">
                To<span> Isolo Ire-Akari Estate</span>
              </div>
              <div className="order-modal-status mt-2">
                <span
                  className="rounded-pill px-2 py-1"
                  style={{
                    background:
                      itemStatus === "New"
                        ? "#FFEBEC"
                        : itemStatus === "Enroute Dropoff" ||
                          itemStatus === "Enroute Pickup"
                        ? "#E9EEFF"
                        : itemStatus === "Cancelled"
                        ? "#F0EFEF"
                        : itemStatus === "Assigned"
                        ? "#FCF2E3"
                        : "#E7FFEC",
                    color:
                      itemStatus === "New"
                        ? "#FF4554"
                        : itemStatus === "Enroute Dropoff" ||
                          itemStatus === "Enroute Pickup"
                        ? "#1752FF"
                        : itemStatus === "Cancelled"
                        ? "#5A5D82"
                        : itemStatus === "Assigned"
                        ? "#F1872D"
                        : "#288F40",
                  }}
                >
                  {itemStatus}
                </span>
              </div>
            </div>
          </div>
          <div className="my-5 px-md-4">
            {itemStatus === "Assigned" ? (
              <div className="order-modal-agent">
                <div className="row p-4">
                  <div className="col-lg-6">
                    <div>Order amount</div>
                    <div>₦4,000.00</div>
                  </div>
                  <div className="col-lg-6">
                    <div>Assigned Agent</div>
                    <div>Assurance Uwangue</div>
                    <div className="order-agent-menu">
                      <BiDotsVerticalRounded />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="order-modal-title">Assign Agent</div>
                <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
                  <div
                    className={
                      agentsFocus
                        ? "input-box active w-100"
                        : agentErr
                        ? "input-box w-100 forgot-email-border"
                        : "input-box w-100"
                    }
                  >
                    <div>
                      {/* <img src={images.eye} alt="Eye" className="img-fluid" /> */}
                      <BiChevronDown size={25} color="#A3A3C2" />
                    </div>
                    <label>Search Agents</label>
                    <input
                      readOnly
                      type="text"
                      className="w-100"
                      name="agent"
                      value={agents}
                      onFocus={() => inputFocus()}
                      onChange={handleChange}
                      onBlur={() => {
                        if (!agents) {
                          setAgentsFocus(false);
                        } else {
                          setSearchResult(false);
                        }
                      }}
                    />
                  </div>
                </div>
                <div>
                  <span className="order-agent-err">
                    {agentErr
                      ? "An agent need to be assigned before this order can be confirmed"
                      : ""}
                  </span>
                </div>
                <div
                  className={
                    searchResult
                      ? "order-modal-search-agent mt-1 position-relative"
                      : "d-none"
                  }
                >
                  <div className="order-modal-search-agent-input position-absolute w-100">
                    <input type="text" placeholder="Search agent" />
                  </div>
                  <div className="order-modal-agent-result-main position-absolute w-100 mt-5">
                    <ul>
                      {agentsData.map((item, i) => {
                        return (
                          <li
                            key={itemStatus}
                            className="d-md-flex justify-content-between"
                            onClick={() => {
                              setAgentsFocus(true);
                              setAgents(item.agentName);
                              setSearchResult(false);
                              setAgentErr(false)
                            }}
                          >
                            <div className="d-flex align-items-center">
                              <div className="order-agent-logo">GO</div>
                              <div className="order-agent-name-loc">
                                <span>{item.agentName}</span>
                                <span className="my-1">
                                  <img src={images.location} alt="" />
                                  <span className="mx-1">{item.location}</span>
                                </span>
                                <div className="rounded-pill d-md-none d-flex">
                                  <span
                                    className="order-modal-agent-status  px-3 rounded-pill"
                                    style={{
                                      color:
                                        item.status === "available"
                                          ? "#288F40"
                                          : "#3842B0",
                                      background:
                                        item.status === "available"
                                          ? "#EDFAF0"
                                          : "#EBEBFF",
                                    }}
                                  >
                                    {item.status}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <span
                                className="order-modal-agent-status rounded-pill px-3  d-md-flex d-none"
                                style={{
                                  color:
                                    item.status === "available"
                                      ? "#288F40"
                                      : "#3842B0",
                                  background:
                                    item.status === "available"
                                      ? "#EDFAF0"
                                      : "#EBEBFF",
                                }}
                              >
                                {item.status}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                      {/* <li>
                        <div className="d-flex align-items-center">
                          <div className="order-agent-logo">GO</div>
                          <div className="order-agent-name-loc">
                            <span>Goodness Chiesom</span>
                            <span>
                              <img src={images.location} alt="" />
                              <span className="mx-1">
                                Agent current location
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="order-modal-agent-status rounded-pill px-3">
                            Available
                          </span>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="py-4">
          <button className="order-modal-close-btn" onClick={handleModal}>
            Close
          </button>
          <button
            className="order-modal-submit-btn"
            onClick={() => handleConfirm()}
          >
            {itemStatus === "Assigned" ? "Mark as fulfilled" : "Confirm"}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrdersScreen;