import React from "react";

export default function StdInput(props) {
  return (
    <div className="Input">
      <h6 for="basic-url" className="form-label mb-2">
        {props.title}
      </h6>
      <div className="input-group mb-3 ">
        <input
          type={props.type?props.type:"text"}
          className="form-control"
          placeholder={props.placeholder}
          onChange={(value)=>{props.onChange(value.target.value)}}
        />
      </div>
      {props.error?<div className="d-flex justify-content-end mb-2" style={{ color: "#ff0000"}}>{props.title==='Confirm Password*'?'Match not found':'This field is mandatory'}</div>:null}
    </div>
  );
}
