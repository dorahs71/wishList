import React from "react";
import PropTypes from "prop-types";

const Show = (props) => (
  <section className="list">
    <button className="btn-showMore" onClick={props.switchShow}>
      {props.isShow ? "Show Less" : "Show More"}
    </button>
    <div className={props.isShow ? "more" : "hidden"}>
      {props.moreinfo.map((info, id) => (
        <div className="card" key={info.id}>
          <img src={info.img} />
          <p>
            <strong>{info.title}</strong>
          </p>
        </div>
      ))}
    </div>
  </section>
);

Show.propTypes = {
  moreinfo: PropTypes.array.isRequired,
  switchShow: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
};
export default Show;
