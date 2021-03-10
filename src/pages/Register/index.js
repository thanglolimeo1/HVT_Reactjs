import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import * as ApiCaller from "./../../helpers/index";
import axios from "axios";
import * as Setting from "./../../constants/Setting";
import { useCookies } from "react-cookie";

function Register(props) {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("thang1@gmail.com ");
  const [password, setPassword] = useState("1234567");
  const [cfpassword, setcfPassword] = useState("");

  let history = useHistory();
  async function HandleSubmit(e) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      cfpassword: cfpassword

    };

    const config = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    let url = (await Setting.URL) + "api/auth/signup";
    try {
      return axios(url, {
        method: "POST",
        data: data,
        config,
      })
        .then((res) => {
          if (res.status === 201) {
            history.push("/login");
          } else {
            alert("Đăng kí thất bại");
          }
        })
        .catch((err) => {
          alert("Đăng kí thất bại");
          console.log(err);
        });
    } catch (err) {
      alert("Đăng kí thất bại");
      console.log(err);
    }
  }

  return (
    <div className="c-app flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mx-4">
              <div className="card-body p-4">
                <h1>Register</h1>
                {/* //start form */}
                <form onSubmit={HandleSubmit}>
                  <p className="text-muted">Create your account</p>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text">
                      <svg className="c-icon">
                        <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-user" />
                      </svg></span></div>
                    <input
                      required
                      className="form-control"
                      value={name}
                      type="text"
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="text"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text">
                      <svg className="c-icon">
                        <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open" />
                      </svg></span></div>
                    <input
                      required
                      className="form-control"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text">
                      <svg className="c-icon">
                        <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                      </svg></span></div>
                    <input
                      required
                      className="form-control"
                      value={password}
                      minLength="6"
                      maxLength="8"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend"><span className="input-group-text">
                      <svg className="c-icon">
                        <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                      </svg></span></div>
                    <input
                      required
                      className="form-control"
                      value={cfpassword}
                      minLength="6"
                      maxLength="8"
                      type="password"
                      onChange={(e) => setcfPassword(e.target.value)}
                      placeholder="Repeat password"
                    />
                  </div>
                  <button className="btn btn-block btn-success" type="submit">Create Account</button>
                </form>
              </div>
              <div className="card-footer p-4">
                <div className="row">
                  <div className="col-6">
                    <button className="btn btn-block btn-facebook" type="button"><span>facebook</span></button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-block btn-twitter" type="button"><span>twitter</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Register;