import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (Navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&apppid={API key}`)
      });
    }
  });
  return <div>Hello</div>;
};

export default Weather;
