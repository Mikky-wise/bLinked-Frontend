import React, { useState } from "react";
import images from "../../../../api/images";
import Footer from "../_components/_footer";

const SetPasswordScreen = () => {
  const [pass, setPass] = useState({
    npass: "",
    cpass: "",
  });

  const [passFocus, setPassFocus] = useState({
    npass: false,
    cpass: false,
  });

  const inputFocus = (name) => {
    setPassFocus({
      ...passFocus,
      [name]: true,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPass({
      ...pass,
      [name]: value,
    });
  };

  const handleClick = () => {
    console.log("object");
  };

  return (
    <div className="auth-main">
      <div className="container auth-cmn-main">
        <img src={images.logo} alt="Logo" className="img-fluid my-5" />
        <div className="auth-cmn-subcontainer px-md-5 py-5">
          <div className="auth-cmn-title">Set a new password, 🔐</div>
          <div className="row justify-content-center">
            <div className="auth-cmn-subtitle px-5">
              Kindly enter and set up a new password for your account.
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12 px-4 mt-md-4 mt-4 auth-input-container fotgot-pass-border">
              <div
                className={
                  passFocus.npass ? "input-box active w-100" : "input-box w-100"
                }
              >
                <div>
                  <img src={images.eye} alt="Eye" className="img-fluid" />
                </div>
                <label>New password</label>
                <input
                  type="password"
                  className="w-100"
                  name="npass"
                  value={pass.npass}
                  onFocus={() => inputFocus("npass")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!pass.npass) {
                      setPassFocus({
                        ...passFocus,
                        npass: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12 px-4 mt-md-4 mt-4 auth-input-container fotgot-pass-border">
              <div
                className={
                  passFocus.cpass ? "input-box active w-100" : "input-box w-100"
                }
              >
                <div>
                  <img src={images.eye} alt="Eye" className="img-fluid" />
                </div>
                <label>Confirm new password</label>
                <input
                  type="password"
                  className="w-100"
                  name="cpass"
                  value={pass.cpass}
                  onFocus={() => inputFocus("cpass")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!pass.cpass) {
                      setPassFocus({
                        ...passFocus,
                        cpass: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="px-2 auth-cmn-btn mt-5">
            <button className="w-100" onClick={handleClick}>
              Change password
            </button>
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

export default SetPasswordScreen;
