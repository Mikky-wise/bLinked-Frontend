import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";
import { validemail } from "../../assets/img";
import { logo, eye } from "../../assets/img";
import Footer from "../../Components/Footer";

const SignUpPage1 = () => {
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

  const [passwordType, setPasswordType] = useState("password");

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

    if (name === 'email') {

      if (!value) {
        setUserErr({
          ...userErr,
          emailErr: true
        });
      }

      if (typeof value !== "undefined") {
        let lastAtPos = value.lastIndexOf("@");
        let lastDotPos = value.lastIndexOf(".");

        if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            value.indexOf("@@") === -1 &&
            lastDotPos > 2 &&
            value.length - lastDotPos > 2
          )
        ) {
          setUserErr({
            ...userErr,
            emailErr: true
          });
        } else {
          setUserErr({
            ...userErr,
            emailErr: false
          });
        }
      }
    } else if (name === 'password') {
      console.log(validator.isStrongPassword(value))
      if (!value) {
        setUserErr({ ...userErr, passwordErr: true });
      }
      else if (!validator.isStrongPassword(value)) {
        setUserErr({ ...userErr, passwordErr: true });
      } else {
        setUserErr({ ...userErr, passwordErr: false });
      }
    }
  };

  const handlePassType = (e) => {
    if (passwordType === "password") {
      setPasswordType("text")
    } else {
      setPasswordType('password')
    }
  }

  const handleSignup = () => {
    const { fname, lname, email, password } = user;
    if (!fname || !lname) {
      setUserErr({
        ...userErr,
        fnameErr: !fname ? true : false,
        lnameErr: !lname ? true : false,
      });
    } else if (!email && !userErr.emailErr) {
      setUserErr({
        ...userErr,
        emailErr: !email ? true : false,
      });
    } else if (!password && !userErr.passwordErr) {
      setUserErr({
        ...userErr,
        passwordErr: !password ? true : false,
      });
    } else if (userErr.emailErr || userErr.passwordErr) {
      return;
    } else {
      history.push("/auth/sign_up2");
    }
  };

  const handleLogin = () => {
    history.push("/");
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

          <div className="row martop-32">
            <div className="col-lg-6  auth-input-container">
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
            <div className="col-lg-6  auth-input-container">
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
            <div className="col-lg-12 martop-32 auth-input-container">
              <div
                className={
                  userFocus.email
                    ? userErr.emailErr ?
                      "input-box active w-100 forgot-email-border"
                      : "input-box active w-100"
                    : userErr.emailErr
                      ? "input-box w-100 forgot-email-border"
                      : "input-box w-100"
                }
              >
                <div className={!validator.isEmail(user.email) ? "d-none" : ""}>
                  <img
                    src={validemail}
                    alt="Valid Email"
                    className="img-fluid"
                  />
                </div>
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
            <div
              className={
                userErr.emailErr
                  ? "col-lg-12 text-start px-4 forgot-email-err"
                  : "d-none"
              }
            >
              Enter a valid email address
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 martop-32 auth-input-container">
              <div
                className={
                  userFocus.password
                    ? userErr.passwordErr ?
                      "input-box active w-100 forgot-email-border"
                      : "input-box active w-100"
                    : userErr.passwordErr
                      ? "input-box w-100 forgot-email-border"
                      : "input-box w-100"
                }
              >
                <div>
                  <img src={eye} alt="Eye" className="img-fluid" onClick={handlePassType} />
                </div>
                <label>Create password</label>
                <input
                  type={passwordType}
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
            <div
              className={
                userErr.passwordErr
                  ? "col-lg-12 text-start px-4 forgot-email-err"
                  : "d-none"
              }
            >
              Enter a strong password containing at least 8 characters with
              1 lower case letter, 1 upper case letter, 1 number and 1 special character
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
            Already have an account yet? <span onClick={handleLogin}>Sign in</span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SignUpPage1;
