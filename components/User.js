import React from "react";

const user = props => (
  <div>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <style jsx>{`
      div {
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        paddinh: 20px;
        text-align: center;
        margin-bottom: 8px;
      }
    `}</style>
  </div>
);

export default user;
