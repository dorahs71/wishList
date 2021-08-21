import React from "react";
import PropTypes from "prop-types";

const List = (props) => (
  <section className="list">
    <div className="container flex">
      {props.wishes.map((wish, id) => (
        <div className="card" key={wish.id}>
          <img src={wish.img} />
          <p>
            <strong>{wish.title}</strong>
          </p>
        </div>
      ))}
    </div>
  </section>
);

List.propTypes = {
  wishes: PropTypes.array.isRequired,
};
export default List;
