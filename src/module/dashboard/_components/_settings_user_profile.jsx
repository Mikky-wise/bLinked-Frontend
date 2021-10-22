import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const SettingsUserProfile = () => {

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phonenumber: "",
    choosepermission: "",
  });

  const [userFocus, setUserFocus] = useState({
    fname: false,
    lname: false,
    email: false,
    phonenumber: false,
    choosepermission: false,
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
      <div className="setting-user-profile">
        <div className="setting-user-title">
          <div className="d-flex justify-content-between mt-4">
            <span> User Profile</span>
          </div>
        </div>
        <div className="setting-user-picture mt-4">
          <div>BL</div>
          <div className="setting-edit-picture-btn mx-4">
            <label>Edit photo</label>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="py-4">
        <div className="settings-user-form-title">Basic information</div>
        <div className="settings-user-form-subline">
          Let’s get to know you. Set up your name and contact details in simple
          steps.
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-lg-6 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.fname ? "input-box active w-100" : "input-box w-100"
                }
              >
                <label>First Name</label>
                <input
                  type="text"
                  className="w-100"
                  name="fname"
                  value={user.fname}
                  onFocus={() => inputFocus("fname")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.fname) {
                      setUserFocus({
                        ...userFocus,
                        fname: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.lname ? "input-box active w-100" : "input-box w-100"
                }
              >
                <label>Last Name</label>
                <input
                  type="text"
                  className="w-100"
                  name="lname"
                  value={user.lname}
                  onFocus={() => inputFocus("lname")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.lname) {
                      setUserFocus({
                        ...userFocus,
                        lname: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.email ? "input-box active w-100" : "input-box w-100"
                }
              >
                <label>Email</label>
                <input
                  type="text"
                  className="w-100"
                  name="email"
                  value={user.email}
                  onFocus={() => inputFocus("email")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.email) {
                      setUserFocus({
                        ...userFocus,
                        email: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.phonenumber
                    ? "input-box active w-100"
                    : "input-box w-100"
                }
              >
                <label>Phone number</label>
                <input
                  type="text"
                  className="w-100"
                  name="phonenumber"
                  value={user.phonenumber}
                  onFocus={() => inputFocus("phonenumber")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.phonenumber) {
                      setUserFocus({
                        ...userFocus,
                        phonenumber: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.choosepermission
                    ? "input-box active w-100"
                    : "input-box w-100"
                }
              >
                <div>
                  {/* <img src={images.eye} alt="Eye" className="img-fluid" /> */}
                  <BiChevronDown size={25} color="#A3A3C2" />
                </div>
                <label>Choose permission set</label>
                <input
                  type="text"
                  className="w-100"
                  name="choosepermission"
                  value={user.choosepermission}
                  onFocus={() => inputFocus("choosepermission")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.choosepermission) {
                      setUserFocus({
                        ...userFocus,
                        choosepermission: false,
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
          <hr className="my-4" />
          <div className="py-4">
            <div className="settings-danger">Danger zone</div>
            <div className="settings-danger-desc mt-2 col-md-8">
              Deactivating your account means you will lose all workspaces
              created by you and all your every other account information.{" "}
            </div>
            <button className="settings-deactive-user-btn px-md-5 px-2 py-md-2 py-2 mt-5">
              Deactivate your account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsUserProfile;
