import "./Humidity.css";
import humidity_icon from "../Assets/humidity.png";

const Humidity = (props) => {
   const humidity = props.humidity;
  return (
    <div className="element">
      <img src={humidity_icon} alt="" className="icon" />
      <div className="data">
        <div className="humidity-percent">{humidity} %</div>
        <div className="text">Humidity</div>
      </div>
    </div>
  );
};

export default Humidity;
