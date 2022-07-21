import React from "react";
import stopwatch from "../Assets/stopwatch.svg";
import chat from "../Assets/chat.svg";

const Card = ({ status, time, price, hours, image, img, name }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start h-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">{status}</h6>
              <div className="d-flex">
                {" "}
                <img src={stopwatch} alt="watch" className="me-1" />{" "}
                <p className="card-text ">{time}</p>
              </div>
              <p className="card-text">
                <small className="text-muted me-2">{hours}</small>{" "}
                <small className="fw-bold">{price}</small>
              </p>
            </div>
          </div>
          <div className="card-footer bg-transparent d-flex justify-content-between align-items-center">
            <div className="w-100 d-flex justify-content-between">
              <p className="text-muted">View Order</p>
            </div>
            <div className=" w-100 d-flex justify-content-between">
              <img src={chat} alt="chat_img" className="me-4"/>
             <div>
             <p className="mb-1">{name}</p>
              <img
                src={img}
                alt="profile_img"
                className="img-fluid profile_img"
              />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
