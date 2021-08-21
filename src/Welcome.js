import React from "react";
import PropTypes from "prop-types";

const Welcome = (props) => (
  <div className="welcome" onClick={props.h1Click}>
    <h1>{props.textChange ? "快點解封吧！" : "解封後，我想來去..."}</h1>
  </div>
);

Welcome.propTypes = {
  textChange: PropTypes.bool.isRequired,
  h1Click: PropTypes.func.isRequired,
};

export default Welcome;
