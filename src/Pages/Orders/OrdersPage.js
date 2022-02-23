import React, { useEffect, useState } from "react";
// Icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { filterIcon } from "../../assets/img";
// Components
import Header from "../../Components/Header";
import RatingCard from "../../Components/RatingCard";
import Sidebar from "../../Components/Sidebar";
import Table from "../../Components/Table";
import OrderDetailsModal from "../../Components/OrderDetailsModal";
// Data
import order from "../../mockData/orders.json";

const OrdersPage = () => {
    const [show, setShow] = useState(false);
    const [itemStatus, setItemStatus] = useState("New");
    const [orders, setOrders] = useState(order);
    // sidebar states
    const [activeMenu, setActiveMenu] = useState("");
    const [activeSidebar, setActiveSidebar] = useState(false);

    const [orderSearch, setOrderSearch] = useState("");

    const handleOrderSearch = (e) => setOrderSearch(e.target.value);

    useEffect(() => {
        setActiveMenu("orders");
    }, []);

    const handleSideBar = () => setActiveSidebar(!activeSidebar);

    useEffect(() => {
        if (orderSearch === '') return;
        setOrders(order.filter(row => (
            row.name?.toLowerCase().includes(orderSearch.toLowerCase()) ||
            row.from?.toLowerCase().includes(orderSearch.toLowerCase()) ||
            row.to?.toLowerCase().includes(orderSearch.toLowerCase()) ||
            row.status?.toLowerCase().includes(orderSearch.toLowerCase())
        )));
    }, [orderSearch]);

    return (
        <div className="dashboard-main">
            <div className="d-flex justify-content-end h-100">
                <Sidebar
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                    activeSidebar={activeSidebar}
                    handleSideBar={handleSideBar}
                />
                <div className="dashboard-container pb-4">
                    <Header handleSideBar={handleSideBar} title="Orders" />
                    <div className="main-container">
                        <div className="px-md-4 px-2 pb-4 mt-4">
                            <div className="total-rating-container">
                                <div className="row px-4 py-4">
                                    <div className="col-lg-3 px-md-3">
                                        <RatingCard
                                            title="Total Orders"
                                            total="400"
                                            rating="+51%"
                                            desc="Analytics for last 30 days"
                                        />
                                    </div>
                                    <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
                                        <RatingCard
                                            title="Transaction Value"
                                            total="40"
                                            rating="+51%"
                                            desc="Analytics for last 30 days"
                                        />
                                    </div>
                                    <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
                                        <RatingCard
                                            title="Pending Orders"
                                            total="120"
                                            rating="+51%"
                                            desc="Analytics for last 30 days"
                                        />
                                    </div>
                                    <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
                                        <RatingCard
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
                                                    <img src={filterIcon} alt="" className="img-fluid" />
                                                    <span>Filter orders</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="orders-search-input mt-md-0">
                                            <span><ImSearch size={15} color="#A3A3C2" /></span>
                                            <input type="text" placeholder="Search orders" value={orderSearch} onChange={handleOrderSearch} />
                                        </div>
                                    </div>
                                </div>
                                <div className="order-list-container mt-4 table-responsive">
                                    <Table items={orders} page="orders" setShow={setShow} setItemStatus={setItemStatus}/>
                                </div>
                                <div
                                    className="order-pagination-container px-md-4 d-flex flex-md-row flex-column justify-content-between align-items-center">
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

                        <OrderDetailsModal show={show} setShow={setShow} itemStatus={itemStatus} setItemStatus={setItemStatus}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
