import React, { useState } from "react";

import { logo } from "../../../assets/img";
import Footer from "../_components/_footer";

const Signup2Screen = () => {
  const [cmp, setCmp] = useState({
    cname: "",
    cemail: "",
    cphone: "",
  });

  const [cmpFocus, setCmpFocus] = useState({
    cname: false,
    cemail: false,
    cphone: false,
  });

  const inputFocus = (name) => {
    setCmpFocus({
      ...cmpFocus,
      [name]: true,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCmp({
      ...cmp,
      [name]: value,
    });
  };

  return (
    <div className="auth-main">
      <div className="container auth-cmn-main">
        <img src={logo} alt="Logo" className="img-fluid my-5" />
        <div className="auth-cmn-subcontainer px-md-5 py-5">
          <div className="auth-cmn-title">It's time to Grow your Business,</div>
          <div className="auth-cmn-subtitle">
            You’re almost there! Quickly tell us about your business{" "}
          </div>

          <div className="row mt-4">
            <div className="col-lg-12 px-4 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  cmpFocus.cname ? "input-box active w-100" : "input-box w-100"
                }
              >
                <label>Company name</label>
                <input
                  type="text"
                  className="w-100"
                  name="cname"
                  value={cmp.cname}
                  onFocus={() => inputFocus("cname")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!cmp.cname) {
                      setCmpFocus({
                        ...cmpFocus,
                        cname: false,
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
                  cmpFocus.cemail ? "input-box active w-100" : "input-box w-100"
                }
              >
                <label>Company Email address</label>
                <input
                  type="text"
                  className="w-100"
                  name="cemail"
                  value={cmp.cemail}
                  onFocus={() => inputFocus("cemail")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!cmp.cemail) {
                      setCmpFocus({
                        ...cmpFocus,
                        cemail: false,
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
                  cmpFocus.cphone ? "input-box active w-100" : "input-box w-100"
                }
              >
                <label>Company phone</label>
                <input
                  type="text"
                  className="w-100"
                  name="cphone"
                  value={cmp.cphone}
                  onFocus={() => inputFocus("cphone")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!cmp.cphone) {
                      setCmpFocus({
                        ...cmpFocus,
                        cphone: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="px-2 auth-cmn-btn mt-5">
            <button className="w-100">Sign up</button>
          </div>

          <div className="auth-cmn-signin mt-4">
            Don’t have an account yet? <span> Create account </span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Signup2Screen;
