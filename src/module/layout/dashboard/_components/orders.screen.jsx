import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import images from "../../../../api/images";
import TotalRatingCard from "./_total_rating_card";
import order from "../../../../localdata/orders.json";
import { BsThreeDots } from "react-icons/bs";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaCaretDown, FaCaretUp, FaSortAlphaDown } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const OrdersScreen = () => {
  const [show, setShow] = useState(false);
  const handleModal = () => setShow(!show);
  return (
    <>
      <div className="px-4 pb-4 mt-4">
        <div className="total-rating-container">
          <div className="row px-4 py-4">
            <div className="col-lg-3 px-3">
              <TotalRatingCard
                title="Total Orders"
                total="400"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
            <div className="col-lg-3 px-3 mt-lg-0 mt-4">
              <TotalRatingCard
                title="Transaction Value"
                total="40"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
            <div className="col-lg-3 px-3 mt-lg-0 mt-4">
              <TotalRatingCard
                title="Pending Orders"
                total="120"
                rating="+51%"
                desc="Analytics for last 30 days"
              />
            </div>
            <div className="col-lg-3 px-3 mt-lg-0 mt-4">
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

      <div className="px-4 mb-4">
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
          <div className="order-list-container mt-4">
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
                        <div>TB</div>
                        <div>{item.name}</div>
                      </td>
                      <td>{item.from}</td>
                      <td>{item.to}</td>
                      <td>₦{parseInt(item.price).toFixed(2)}</td>
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
                      <td onClick={handleModal}>
                        <BsThreeDots color="#727E8F" size={23} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="order-pagination-container px-4">
              <div>Showing 9 of 290 agents</div>
              <div>
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
      </div>
      <div className="px-4 mb-4"></div>

      <Modal show={show} onHide={handleModal} centered size="lg">
        <Modal.Header className="d-flex justify-content-between">
          <div>Order Details</div>
          <div>X</div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="order-modal-main">
              <div className="order-modal-id">Order ID 15285046</div>
              <div className="order-modal-from-price">
                <span>From Isolo Ire-Akari Estate &bull; 12mins ago</span>
                <span>₦850,000.00</span>
              </div>
              <div className="order-modal-to">To Isolo Ire-Akari Estate</div>
              <div className="order-modal-status">New</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrdersScreen;
