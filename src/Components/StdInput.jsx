import React from "react";

export default function StdInput(props) {
  return (
    <div className="Input">
      <h6 for="basic-url" className="form-label mb-2">
        {props.title}
      </h6>
      <div className="input-group mb-3 ">
        <input
          type="text"
          className="form-control"
          placeholder={props.placeholder}
          onChange={(value)=>{props.onChange(value.target.value)}}
        />
      </div>
    </div>
  );
}
