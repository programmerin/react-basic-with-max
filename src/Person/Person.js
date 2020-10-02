import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <li className="Person">
      <p>
        My Name is {props.name}. I'm {props.age} years old
      </p>
      <input type="text" onChange={props.change} />
    </li>
  );
};

export default Person;
