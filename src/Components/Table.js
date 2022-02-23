import React from 'react';
import { getOrderStyle } from "../helpers/getRowStyles";
import { BsThreeDots } from "react-icons/bs";

export default function Table({ items, page, setShow, setItemStatus }) {
    if (page === 'home') {
        return (
            <table className="mt-4">
                <thead>
                    <tr>
                        <th>CUSTOMER NAME</th>
                        <th>FROM LOCATION</th>
                        <th>TO LOCATION</th>
                        <th>TOTAL AMOUNT</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => {
                        const { name, from, to, price, status } = item;
                        return (
                            <tr key={i}>
                                <td>{name}</td>
                                <td>{from}</td>
                                <td>{to}</td>
                                <td>₦{parseInt(price).toFixed(2)}</td>
                                <td className="home-pending-order-list-status">
                                    <span className="px-2 py-1 rounded-pill" style={getOrderStyle(status)}>
                                        {status}
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    };

    if (page === 'orders') {
        return (
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
                    {items.map((item, i) => {
                        const { name, from, to, price, status } = item;
                        return (
                            <tr key={i}>
                                <td className="order-item-name">
                                    <span className="d-flex align-items-center">
                                        <span>TB</span>
                                        {name}
                                    </span>
                                </td>
                                <td><span>{from}</span></td>
                                <td><span>{to}</span></td>
                                <td><span>₦{parseInt(price).toFixed(2)}</span></td>
                                <td className="order-list-status">
                                    <span
                                        className="px-2 py-1 rounded-pill"
                                        style={getOrderStyle(status)}
                                    >
                                        {status}
                                    </span>
                                </td>
                                <td className="three_dots" onClick={() => {
                                    setShow(true);
                                    setItemStatus(status);
                                }}>
                                    <BsThreeDots color="#727E8F" size={23} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        )
    };

    return null
};