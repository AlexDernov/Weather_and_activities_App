import { useState } from 'react';

export async function getWeather() {
    const [weather, setWeather] = useState({});
    const weatherUrl = "https://example-apis.vercel.app/api/weather";
    try {
      const response = await fetch(weatherUrl);
     if (response.ok) {
      const data = await response.json();
      setWeather(data);
     }
       else {
        alert("Something is going wrong");
     } 
     } catch (error) {
      alert("Error");
    }
    return weather
  }
