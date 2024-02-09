import sunset from '../Assets/sunset.png'

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

const Sunset = () => {
  return (
    <div className="sunrise">
      <img src={sunset} alt="" width="70px" />
      <p>Sunset</p>
      <h3>{formatTime(1707483925)}</h3>
    </div>
  );
};

export default Sunset;
