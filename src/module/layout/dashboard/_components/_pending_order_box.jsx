import React from "react";
import { Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";

const PendingOrderBox = ({ item }) => {
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
    <div className="home-pending-order-grid-box py-4">
      <div className="mb-5">
        <div className="home-pending-order-name">
          <span>{item.name}</span>

          <Dropdown className="d-inline mx-2 border-0">
            <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
              <span>
                <BsThreeDots color="#727E8F" size={23} />
              </span>
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
        </div>
        <div className="home-pending-order-loc mt-2">
          <span>From {item.from} | 20 mins ago</span>
          <span>To {item.to}</span>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <span className="home-pending-order-price">₦{item.price}</span>
        <span
          className="home-pending-order-status px-3 py-1 rounded-pill"
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
      </div>
    </div>
  );
};

export default PendingOrderBox;
