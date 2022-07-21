import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const Orders = ({ state }) => {
  console.log(state.Jdata[0].results);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 bg-light">
          <h6 className="p-2">{state.Jdata[0].stage}</h6>
          {state.Jdata[0].results.map((res) => {
            return (
              <Card
                status={res.status}
                time={res.time}
                price={res.price}
                hours={res.hours}
                image={res.image}
                img={res.message.image}
                name={res.message.name}
              />
            );
          })}
        </div>
        <div className="col-3 bg-light">
          <h6 className="p-2">{state.Jdata[1].stage}</h6>
          {state.Jdata[1].results.map((res) => {
            return (
              <Card
                status={res.status}
                time={res.time}
                price={res.price}
                hours={res.hours}
                image={res.image}
                img={res.message.image}
                name={res.message.name}
              />
            );
          })}
        </div>
        <div className="col-3 bg-light">
          <h6 className="p-2">{state.Jdata[2].stage}</h6>
          {state.Jdata[2].results.map((res) => {
            return (
              <Card
                status={res.status}
                time={res.time}
                price={res.price}
                hours={res.hours}
                image={res.image}
                img={res.message.image}
                name={res.message.name}
              />
            );
          })}
        </div>
        <div className="col-3 bg-light">
          <h6 className="p-2">{state.Jdata[3].stage}</h6>
          {state.Jdata[3].results.map((res) => {
            return (
              <Card
                status={res.status}
                time={res.time}
                price={res.price}
                hours={res.hours}
                image={res.image}
                img={res.message.image}
                name={res.message.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const getdata = (state) => {
  return {
    state,
  };
};

export default connect(getdata)(Orders);
