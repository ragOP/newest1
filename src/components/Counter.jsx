import React from "react";
import first from "../assests/first";
import second from "../assests/second";
import third from "../assests/third";

const Counter = () => {
  return (
    <div className="counter">
      <h1>SETTLEMENT:</h1>
      <img src={first} alt="" />
      <h2>MOTOR VEHICLE ACCIDENT</h2>
      <h1>SETTLEMENT:</h1>
      <img src={second} alt="" />
      <h2>UBER ACCIDENT</h2>
      <h1>SETTLEMENT:</h1>
      <img src={third} alt="" />
      <h2>SMOTOR VEHICLE ACCIDENT</h2>
    </div>
  );
};

export default Counter;
