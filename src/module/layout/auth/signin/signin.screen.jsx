import React, { useState } from "react";
import images from "../../../../api/images";

const SigninScreen = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userFocus, setUserFocus] = useState({
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

  return (
    <div className="auth-main">
      <div className="row w-100">
        <div className="col-lg-8 signin-comp-a">
          <div className="d-flex justify-content-center">
            <img src={images.logo} alt="Logo" className="img-fluid my-5" />
          </div>
          <div className="signin-title">Welcome back to bLinked, 👏🏽</div>
          <div className="signin-subcontainer px-md-5 mt-5">
            <div className="signin-with-google px-md-3">
              <div className="shadow-sm">
                <img src={images.google} alt="" />
              </div>
              <button className="w-100">Sign in with Google</button>
            </div>
            <div className="signin-with-email mt-4">
              <div></div>
              <div className="mx-4">Or, sign in with your email</div>
              <div></div>
            </div>
            <div className="row">
              <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
                <div
                  className={
                    userFocus.email
                      ? "input-box active w-100"
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
              <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
                <div
                  className={
                    userFocus.password
                      ? "input-box active w-100"
                      : "input-box w-100"
                  }
                >
                  <label>Password</label>
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

            <div className="signin-with-email-btn px-md-3 mt-5">
              <button className="w-100">Log in</button>
            </div>
            <div className="signin-forgot-password mt-5 px-3">
              Forgot your password?
            </div>
            <div className="signin-create-ac mt-4 px-3">
              Don’t have an account yet? <span>Create account</span>
            </div>
            <div className="signin-footer px-3 mb-5">
              <div>Help</div>
              <div>Terms & Conditions</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 px-5 py-5 signin-comp-b">
          <div>
            <div>
              <img src={images.partical5} alt="" className="img-fluid" />
            </div>
            <div className="signin-comp-b-title mt-5">
              Sell fast, sell more - grow your business.
            </div>
            <p className="signin-comp-b-desc mt-4">
              Manage your inventory accross multiple sales channels, collect all
              types of payments and analyze your sales with one tool.
            </p>
          </div>
          <div className="signin-vector">
            <div>
              <img
                src={images.loginVectorA}
                alt="Login"
                className="img-fluid"
              />
            </div>
            <div>
              <img src={images.partical} alt="" className="img-fluid" />
            </div>
            <div>
              <img src={images.partical2} alt="" className="img-fluid" />
            </div>
            <div>
              <img src={images.partical3} alt="" className="img-fluid" />
            </div>
            <div>
              <img src={images.partical4} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninScreen;
