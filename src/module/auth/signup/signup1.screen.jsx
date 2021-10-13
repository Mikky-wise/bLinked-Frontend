import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { logo, eye } from "../../../assets/img";
import Footer from "../_components/_footer";

const Signup1Screen = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [userErr, setUserErr] = useState({
    fnameErr: false,
    lnameErr: false,
    emailErr: false,
    passwordErr: false,
  });

  const [userFocus, setUserFocus] = useState({
    fname: false,
    lname: false,
    email: false,
    password: false,
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

  const handleSignup = () => {
    const { fname, lname, email, password } = user;
    if (!fname || !lname || !email || !password) {
      setUserErr({
        fnameErr: !fname ? true : false,
        lnameErr: !lname ? true : false,
        emailErr: !email ? true : false,
        passwordErr: !password ? true : false,
      });
    } else {
      history.push("/auth/sign_up2");
    }
  };

  const handleLogin = () => {
    history.push("/auth/signin");
  }

  return (
    <div className="auth-main">
      <div className="container auth-cmn-main">
        <img src={logo} alt="Logo" className="img-fluid my-5" />
        <div className="auth-cmn-subcontainer px-md-5 py-5">
          <div className="auth-cmn-title">Let’s get you started 👇🏽</div>
          <div className="auth-cmn-subtitle">
            First of, let’s get to know you
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 px-4 mt-md-2 mt-4 auth-input-container">
              <div
                className={
                  userFocus.fname
                    ? "input-box active w-100"
                    : userErr.fnameErr
                    ? "input-box w-100 forgot-email-border"
                    : "input-box w-100"
                }
              >
                <label>First name</label>
                <input
                  type="text"
                  className="w-100"
                  name="fname"
                  value={user.fname}
                  onFocus={() => inputFocus("fname")}
                  onChange={handleChange}
                  onBlur={() => {
                    console.log("object13");
                    if (!user.fname) {
                      console.log("object12");
                      setUserFocus({
                        ...userFocus,
                        fname: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 px-4 mt-md-2 mt-4 auth-input-container">
              <div
                className={
                  userFocus.lname
                    ? "input-box active w-100"
                    : userErr.lnameErr
                    ? "input-box w-100 forgot-email-border"
                    : "input-box w-100"
                }
              >
                <label>Last name</label>
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
            <div className="col-lg-12 px-4 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.email
                    ? "input-box active w-100"
                    : userErr.emailErr
                    ? "input-box w-100 forgot-email-border"
                    : "input-box w-100"
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
          </div>
          <div className="row">
            <div className="col-lg-12 px-4 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.password
                    ? "input-box active w-100"
                    : userErr.passwordErr
                    ? "input-box w-100 forgot-email-border"
                    : "input-box w-100"
                }
              >
                <div>
                  <img src={eye} alt="Eye" className="img-fluid" />
                </div>
                <label>Create password</label>
                <input
                  type="password"
                  className="w-100"
                  name="password"
                  value={user.password}
                  onFocus={() => inputFocus("password")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.password) {
                      setUserFocus({
                        ...userFocus,
                        password: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="my-4 signup-terms-condition">
            By clicking on the Continue button you agree with our
            <span>
              {" "}
              Terms <br />& Conditions
            </span>{" "}
            and <span>Privacy Policy</span>
          </div>

          <div className="px-2 auth-cmn-btn">
            <button className="w-100" onClick={handleSignup}>
              Continue
            </button>
          </div>

          <div className="auth-cmn-signin mt-4">
            Don’t have an account yet? <span onClick={handleLogin}> Create account </span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Signup1Screen;
