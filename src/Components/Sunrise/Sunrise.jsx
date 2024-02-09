import "./Sunrise.css";
import sunrise from '../Assets/sunrise.png'

const formatTime=(timestamp) => {
    // Convert Unix timestamps to milliseconds.
    const timeMillis = timestamp * 1000;
    
    // Create Date objects from the milliseconds
    const sunriseDate = new Date(timeMillis);
    
    // Format dates to in a human-readable format
    const options = {
      hour: 'numeric',
      minute: 'numeric',
    //   second: 'numeric',
      hour12: true,
      timeZone: 'Asia/Kolkata', // Set timeZone to IST (GMT+5:30)
    };
    
    const formattedTime = sunriseDate.toLocaleTimeString('en-US', options);
    return formattedTime;
}

const Sunrise = (props) => {
    const timeStamp = props.timeStamp;
    console.log(timeStamp);

  return (
    <div className="sunrise">
      <img src={sunrise} alt="" width="70px" />
      <p>Sunrise</p>
      <h3>{formatTime(timeStamp)}</h3>
    </div>
  );
};

export default Sunrise;