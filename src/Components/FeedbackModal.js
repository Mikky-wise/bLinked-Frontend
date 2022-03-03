import React from 'react';
import { Modal } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import { AvatarPlaceholder } from '../assets/img/index';
import { getOrderStyle } from '../helpers/getRowStyles';

export default function FeedbackModal({ show, setShow, selected }) {
    return (
        <Modal show={show} centered size="lg" className="feedback-modal">
            <Modal.Header className="header">
                <h3 className="title">Feedback</h3>
                <div className="close" onClick={() => setShow(false)}>
                    <MdClose color="#3842B0" />
                </div>
            </Modal.Header>
            <Modal.Body className="body">
                <div className="info">
                    <div className="row">
                        <p className="item">Issue created by</p>
                        <p className="value">Carolyn Harvey</p>
                    </div>
                    <div className="row">
                        <p className="item">Budget</p>
                        <p className="value budget">₦{parseInt(selected.price).toFixed(2)}</p>
                    </div>
                    <div className="row">
                        <p className="item">Status</p>
                        <p className="value">
                            <span className="status" style={getOrderStyle(selected.status)}>
                                {selected.status}
                            </span>
                        </p>
                    </div>
                    <div className="row">
                        <p className="item">Sent</p>
                        <p className="value">05-5-2021</p>
                    </div>
                    <div className="row">
                        <p className="item">Query</p>
                        <p className="value">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    </div>
                </div>
                <form className="form">
                    <div className="buttons">
                        <button className="comments">Comments</button>
                        <button className="activities">Activities</button>
                    </div>
                    <div className="input">
                        <img className="image" src={AvatarPlaceholder} />
                        <textarea className="textarea" placeholder="Add a comment" />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer className="footer">
                <button className="resolved" onClick={() => setShow(false)}>Mark as resolved</button>
                <button className="submit">Send reply</button>
            </Modal.Footer>
        </Modal>
    )
};