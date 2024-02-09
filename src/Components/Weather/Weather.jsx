import "./Weather.css";

const Weather = (props) => {
    const {cityName, temp, temp_min, temp_max, weatherIcon} = props;
  return (
    <div className="weather">
      <div className="weather-image">
        <img src={weatherIcon} alt="" />
      </div>
      <div className="weather-temp">{temp}° C</div>
      <div className="weather-location">{cityName}</div>
      <div className="weather-temp-min-max">
        <span>Min: {temp_min}°C</span>
        <span> | </span>
        <span>Max: {temp_max}°C</span>
      </div>
    </div>
  );
};

export default Weather;
