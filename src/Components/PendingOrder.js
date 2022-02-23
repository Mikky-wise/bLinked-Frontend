import React from "react";
import { getOrderStyle } from "../helpers/getRowStyles";

const PendingOrderBox = ({ item }) => {
    const { name, from, to, price, status } = item;
    return (
        <div className="home-pending-order-grid-box py-4">
            <div className="mb-5">
                <div className="home-pending-order-name">
                    <span>{name}</span>
                </div>
                <div className="home-pending-order-loc mt-2">
                    <span>From {from} | 20 mins ago</span>
                    <span>To {to}</span>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
                <span className="home-pending-order-price">₦{price}</span>
                <span
                    className="home-pending-order-status px-3 py-1 rounded-pill"
                    style={getOrderStyle(status)}
                >
                    {status}
                </span>
            </div>
        </div>
    );
};

export default PendingOrderBox;
