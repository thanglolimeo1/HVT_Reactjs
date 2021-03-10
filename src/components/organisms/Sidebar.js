import React, { useState } from "react";
import { useCookies, removeCookie } from "react-cookie";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import * as Setting from './../../constants/Setting';
import * as ApiCaller from './../../helpers/index';
import Booking from './../../pages/Booking';

function Sidebar(props) {
  const [cookies, removeCookie] = useCookies(['']);
  let history = useHistory();
  const token = cookies.access_token;
  function logout() {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất?")) {
      try {
        ApiCaller.handleGet("api/auth/logout", token)
          .then((res) => {
            removeCookie('access_token');
            removeCookie('user_info');
            history.push('/login')
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        alert(err);
      };
    }
  }
  function booking() {
    history.push("/booking");
  }

  function RoomMap() {
    history.push("/room_map");
  }

  function listbooking(){
    history.push("/listbooking");
  }
  return (
    <div className="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
      <div className="c-sidebar-brand d-lg-down-none">
        <svg className="c-sidebar-brand-full" width={118} height={46} alt="CoreUI Logo">
          <use xlinkHref="assets/brand/coreui.svg#full" />
        </svg>
        <svg className="c-sidebar-brand-minimized" width={46} height={46} alt="CoreUI Logo">
          <use xlinkHref="assets/brand/coreui.svg#signet" />
        </svg>
      </div>
      <ul className="c-sidebar-nav">
        <li className="c-sidebar-nav-item"><a className="c-sidebar-nav-link" href="index.html">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-speedometer" />
          </svg> Dashboard<span className="badge badge-info">NEW</span></a></li>

        <li className="c-sidebar-nav-item"><a onClick={RoomMap} className="c-sidebar-nav-link" href="#">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-speedometer" />
          </svg> RoomMap</a></li>

        <li className="c-sidebar-nav-item"><a onClick={booking} className="c-sidebar-nav-link" href="#">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-speedometer" />
          </svg> Booking</a></li>

        <li className="c-sidebar-nav-item"><a onClick={listbooking} className="c-sidebar-nav-link" href="#">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-speedometer" />
          </svg> ListBooking</a></li>
      </ul>

      <ul className="c-sidebar-nav">
        <li className="c-sidebar-nav-item"><a onClick={logout} className="c-sidebar-nav-link" href="#">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-speedometer" />
          </svg> Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;