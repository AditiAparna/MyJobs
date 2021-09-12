import React from "react";

function ModalCard(props) {
  return (
    <div className="card m-2">
        {console.log("hi",props)}
      <div className="row mt-3">
        <div className="col logo d-flex align-itmes-center justify-content-around">
          <h1 className="pt-1 pl-3 pr-3 ">E</h1>
        </div>
        <div className="col mr-4 mt-2 info">
          <h6>{props.data.name}</h6>
          <p>{props.data.email}</p>
        </div>
        <div className="row skills ml-4 mt-2 mr-1">
          <h6 className="">Skills</h6>
          <p> {props.data.skills}</p>
        </div>
      </div>
    </div>
  );
}

export default ModalCard;
