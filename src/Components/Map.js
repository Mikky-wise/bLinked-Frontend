import React, { useRef, useState } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GoogleLocate, MapMarker, MapMarkerGreen, MapMarkerGray, MapMarkerRed } from "../assets/img";

const MapComponent = (props) => {
    const mapRef = useRef(null);
    const [zoom, setZoom] = useState(12);
    const [mapCenter, setMapCenter] = useState({ lat: 6.45567900007564, lng: 3.388292095013091 })
    const [activeMarker, setActiveMarker] = useState({});
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    const style = {
        width: "100%",
        height: "400px",
        position: "relative",
    };

    const containerStyle = {
        width: "100%",
        height: "100%",
        position: "relative"
    }

    const onMarkerClick = (props, marker) => {
        setShowInfoWindow(true);
        setActiveMarker(marker);
    };

    const agents = [{ lat: 6.43567900007564, lng: 3.408292095013091, status: "Available" }, { lat: 6.45467900007564, lng: 3.408292095013091, status: "Active" }, { lat: 6.42567900007564, lng: 3.388292095013091, status: "Active" }, { lat: 6.44567900007564, lng: 3.370292095013091, status: "Unavailable" }, { lat: 6.46567900007564, lng: 3.398292095013091, status: "Inactive" }]

    return (
        <div className="px-md-4 px-2 pb-4">
            <div className="d-md-flex">
                <div className="home-location-container px-4 py-4">
                    <div className="mt-2 mb-4">Agent Locations</div>
                    <div>
                        <figure style={{ borderRadius: 8, overflow: "hidden" }}>
                            <Map
                                ref={mapRef}
                                google={props.google}
                                zoom={zoom}
                                style={style}
                                containerStyle={containerStyle}
                                initialCenter={mapCenter}
                            >
                                <div className="google-map-controller-main">
                                    <button onClick={() => setZoom(12)}>
                                        <img src={GoogleLocate} alt="" className="img-fluid" />
                                    </button>
                                    <div className="google-controller-line" />
                                    <button
                                        className="google-map-controller-btn"
                                        onClick={zoom > 2 ? () => setZoom(zoom + 1) : () => { }}
                                    >
                                        <FiPlus />
                                    </button>
                                    <div className="google-controller-line" />
                                    <button
                                        className="google-map-controller-btn"
                                        onClick={zoom > 2 ? () => setZoom(zoom - 1) : () => { }}
                                    >
                                        <FiMinus />
                                    </button>
                                </div>
                                {agents.map(agent => {
                                    const icon = {
                                        url: agent.status === 'Active' ? MapMarker : 
                                        agent.status === 'Available' ? MapMarkerGreen : 
                                        agent.status === 'Inactive' ? MapMarkerGray : MapMarkerRed, // url
                                        scaledSize: new props.google.maps.Size(90, 42), // scaled size
                                    };
                                    return <Marker
                                        key={agent.lat + agent.lng}
                                        onClick={onMarkerClick}
                                        position={{ lat: agent.lat, lng: agent.lng }}
                                        icon={icon}
                                    />
                                })}
                                {showInfoWindow &&
                                    <InfoWindow marker={activeMarker} visible={showInfoWindow}>
                                        <div className="info_window">
                                            <img className="profile_image" alt="" />
                                            <p className="agent_name">Tajao Bullaha</p>
                                            <div className="info_address">
                                                <img src={MapMarker} alt="" />
                                                <p className="agent_location">Ire-akari Estate Isolo, Lagos State</p>
                                            </div>
                                            <span className="info_status">Enroute Dropoff</span>
                                        </div>
                                    </InfoWindow>
                                }
                            </Map>
                        </figure>
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
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyC445P-0GdRNz_li2hPGjYLzHzFokCpj68",
    LoadingContainer: () => <div></div>,
})(MapComponent);
