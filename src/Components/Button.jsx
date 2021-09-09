import React from "react";

export default function Button(props) {
  return (
    <div
      className="row justify-content-center"
      style={{ marginLeft: props.left }}
    >
      <button type="button" className="btn button">
        {props.name}
      </button>
    </div>
  );
}
