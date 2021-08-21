import React from "react";
import PropTypes from "prop-types";

const Aside = (props) => (
  <React.Fragment>
    <div className="header">
      <h1>After Covid-19 ｜Wish List</h1>
      <a href="#" className="mobile-open" onClick={props.switchAside}>
        <i className="fas fa-bars fa-2x"></i>
      </a>
      <ul className="menu">
        <li>
          <a href="schedule.html">計劃表</a>
        </li>
        <li>
          <a href="food.html">美食地圖</a>
        </li>
        <li>
          <a href="place.html">旅遊景點</a>
        </li>
        <li>
          <a href="index.html">首頁</a>
        </li>
      </ul>
    </div>

    <div className={props.isAside ? "aside" : "hidden"}>
      <a href="#" className="mobile-close" onClick={props.switchAside}>
        <i className="fas fa-window-close fa-2x"></i>
      </a>
      <ul className="aside_menu">
        <li>
          <a href="index.html">首頁</a>
        </li>
        <li>
          <a href="place.html">旅遊景點</a>
        </li>
        <li>
          <a href="food.html">美食地圖</a>
        </li>
        <li>
          <a href="schedule.html">計劃表</a>
        </li>
      </ul>
    </div>
    <div id={props.isAside ? "overly" : "hidden"}></div>
  </React.Fragment>
);

Aside.propTypes = {
  switchAside: PropTypes.func.isRequired,
  isAside: PropTypes.bool.isRequired,
};
export default Aside;
