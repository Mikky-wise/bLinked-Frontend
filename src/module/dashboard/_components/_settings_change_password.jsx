import React, { useState } from "react";

import { eye } from "../../../assets/img";

const SettingsChangePassword = () => {
  const [user, setUser] = useState({
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const [userFocus, setUserFocus] = useState({
    currentpassword: false,
    newpassword: false,
    confirmpassword: false,
  });

  const inputFocus = (name) => {
    setUserFocus({
      ...userFocus,
      [name]: true,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <div className="py-4 settings-change-pass-main">
        <div className="settings-user-form-title mt-4">Change password</div>
        <div className="settings-user-form-subline mt-2">
          Enter your current password to set a new one. Ensure it is personal to
          you alone.
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.currentpassword
                    ? "input-box active w-100"
                    : "input-box w-100"
                }
              >
                <div>
                  <img src={eye} alt="Eye" className="img-fluid" />
                </div>
                <label>Current password</label>
                <input
                  type="password"
                  className="w-100"
                  name="currentpassword"
                  value={user.currentpassword}
                  onFocus={() => inputFocus("currentpassword")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.currentpassword) {
                      setUserFocus({
                        ...userFocus,
                        currentpassword: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.newpassword
                    ? "input-box active w-100"
                    : "input-box w-100"
                }
              >
                <div>
                  <img src={eye} alt="Eye" className="img-fluid" />
                </div>
                <label>New password</label>
                <input
                  type="password"
                  className="w-100"
                  name="newpassword"
                  value={user.newpassword}
                  onFocus={() => inputFocus("newpassword")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.newpassword) {
                      setUserFocus({
                        ...userFocus,
                        newpassword: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.confirmpassword
                    ? "input-box active w-100"
                    : "input-box w-100"
                }
              >
                <div>
                  <img src={eye} alt="Eye" className="img-fluid" />
                </div>
                <label>Confirm password</label>
                <input
                  type="password"
                  className="w-100"
                  name="confirmpassword"
                  value={user.confirmpassword}
                  onFocus={() => inputFocus("confirmpassword")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.confirmpassword) {
                      setUserFocus({
                        ...userFocus,
                        confirmpassword: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="settings-user-form-action-btn d-flex justify-content-md-end justify-content-center my-5">
            <button>Discard</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsChangePassword;
