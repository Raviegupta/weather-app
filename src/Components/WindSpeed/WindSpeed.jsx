import React from "react";
import wind_icon from "../Assets/wind.png";

const WindSpeed = (props) => {
    const windspeed = props.windspeed
  return (
    <div className="element">
      <img src={wind_icon} alt="" className="icon" />
      <div className="data">
        <div className="humidity-percent">{windspeed} km/hr</div>
        <div className="text">Wind Speed</div>
      </div>
    </div>
  );
};

export default WindSpeed;
