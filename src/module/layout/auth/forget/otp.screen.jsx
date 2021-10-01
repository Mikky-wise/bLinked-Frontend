import React, { useState, useRef } from "react";
import images from "../../../../api/images";
import Footer from "../../../components/footer";

const OTPScreen = () => {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");
  const pin1ref = useRef();
  const pin2ref = useRef();
  const pin3ref = useRef();
  const pin4ref = useRef();
  const pin5ref = useRef();
  const pin6ref = useRef();

  return (
    <div className="auth-main">
      <div className="container auth-cmn-main">
        <img src={images.logo} alt="Logo" className="img-fluid my-5" />
        <div className="auth-cmn-subcontainer px-md-5 py-5">
          <div className="auth-cmn-title">
            We sent you a password reset link, 📬
          </div>
          <div className="row justify-content-center">
            <div className="auth-cmn-subtitle col-md-8 px-4 px-md-4">
              A password reset link has been sent to your email, fellow the link
              or enter the 6 digits code in it below to continue.
            </div>
          </div>

          <div className="row mt-5">
            <div className="otp-main">
              <input
                type="text"
                className={pin1 ? "active" : ""}
                name="pin1"
                value={pin1}
                ref={pin1ref}
                maxLength={1}
                onChange={(e) => {
                  setPin1(e.target.value);
                  if (e.target.value !== "") {
                    pin2ref.current.focus();
                  } else {
                    pin1ref.current.focus();
                  }
                }}
              />
              <input
                type="text"
                className={pin2 ? "active" : ""}
                name="pin2"
                value={pin2}
                ref={pin2ref}
                maxLength={1}
                onChange={(e) => {
                  setPin2(e.target.value);
                  if (e.target.value !== "") {
                    pin3ref.current.focus();
                  } else {
                    pin1ref.current.focus();
                  }
                }}
              />
              <input
                type="text"
                className={pin3 ? "active" : ""}
                name="pin3"
                value={pin3}
                ref={pin3ref}
                maxLength={1}
                onChange={(e) => {
                  setPin3(e.target.value);
                  if (e.target.value !== "") {
                    pin4ref.current.focus();
                  } else {
                    pin2ref.current.focus();
                  }
                }}
              />
              <input
                type="text"
                className={pin4 ? "active" : ""}
                name="pin4"
                value={pin4}
                ref={pin4ref}
                maxLength={1}
                onChange={(e) => {
                  setPin4(e.target.value);
                  if (e.target.value !== "") {
                    pin5ref.current.focus();
                  } else {
                    pin3ref.current.focus();
                  }
                }}
              />
              <input
                type="text"
                className={pin5 ? "active" : ""}
                name="pin5"
                value={pin5}
                ref={pin5ref}
                maxLength={1}
                onChange={(e) => {
                  setPin5(e.target.value);
                  if (e.target.value !== "") {
                    pin6ref.current.focus();
                  } else {
                    pin4ref.current.focus();
                  }
                }}
              />
              <input
                type="text"
                className={pin6 ? "active" : ""}
                name="pin6"
                value={pin6}
                ref={pin6ref}
                maxLength={1}
                onChange={(e) => {
                  setPin6(e.target.value);
                  if (e.target.value !== "") {
                    pin6ref.current.focus();
                  } else {
                    pin5ref.current.focus();
                  }
                }}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8 px-md-2 px-4 auth-cmn-btn mt-5">
              <button className="w-100" onClick={() => console.log("object")}>
                Continue
              </button>
            </div>
          </div>

          <div className="auth-cmn-signin mt-4">
            Take me back to<span> Login</span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OTPScreen;
