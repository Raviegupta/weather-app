import React, { useEffect, useState } from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import thunderstorm_icon from "../Assets/thunderstorm.png";

import Sunrise from "../Sunrise/Sunrise";
import Sunset from "../Sunset/Sunset";
import Weather from "../Weather/Weather";
import Humidity from "../Humidity/Humidity";
import WindSpeed from "../WindSpeed/WindSpeed";

const WeatherApp = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("Bengaluru");
  const [liveData, setLiveData] = useState({});
  const [weatherIcon, setWeatherIcon] = useState(drizzle_icon);

  useEffect(() => {
    fetchData();
  }, [searchText]);

  const fetchData = async () => {
    try {
      console.log("fetching the live api...");

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=Metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      if(data?.name) {
        setLiveData(data);
      }

      if (data?.weather[0]?.main == "Clouds") {
        setWeatherIcon(cloud_icon);
        console.log("Clouds");
      } else if (data?.weather[0]?.main == "Rain") {
        setWeatherIcon(rain_icon);
        console.log("Rain");
      } else if (data?.weather[0]?.main == "Snow") {
        setWeatherIcon(snow_icon);
        console.log("Snow");
      } else if (data?.weather[0]?.main == "Drizzle") {
        setWeatherIcon(drizzle_icon);
        console.log("Drizzle");
      } else if (data?.weather[0]?.main == "Clear") {
        setWeatherIcon(clear_icon);
        console.log("Clear");
      } else if (data?.weather[0]?.main == "Thunderstorm") {
        setWeatherIcon(thunderstorm_icon);
        console.log("Thunderstorm");
      } else if (data?.weather[0]?.main == "Mist") {
        setWeatherIcon(thunderstorm_icon);
        console.log("Mist");
      }
    } catch (err) {
      alert("city not found");
      return 0;
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="search"
          value={inputText}
          onChange={(e) => {
            console.log(e.target.value);
            setInputText(e.target.value);
          }}
        />
        <div
          className="search-icon"
          onClick={() => {
            
            setSearchText(inputText);
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="date">{Date()}</div>
      <div className="main-container">
        <Sunrise timeStamp={liveData?.sys?.sunrise}/>
        <Weather weatherIcon={weatherIcon} cityName={liveData?.name} temp={liveData?.main?.temp} temp_min={liveData?.main?.temp_min} temp_max={liveData?.main?.temp_max} />
        <Sunset timeStamp={liveData?.sys?.sunset}/>
      </div>
      <div className="data-container">
        <Humidity humidity={liveData?.main?.humidity}/>
        <WindSpeed windspeed={liveData?.wind?.speed}/> 
      </div>
    </div>
  );
};

export default WeatherApp;