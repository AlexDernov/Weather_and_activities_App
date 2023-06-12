import { useState } from 'react'
import { useLocalStorageState } from 'use-local-storage-state'
import './App.css'

function App() {
  const [weather, setWeather] = useState({});
  const [activities, setActivities] = useLocalStorageState ("activites",{defaultValue: {}});
  function handleAddActivity (newActivity) {
    setActivities([...activities, {id: uid(),...newActivity}]);
  activities.filter
  function handleDelete
  }
  const weatherUrl = "https://example-apis.vercel.app/api/weather";
  async function getWeather() {
    try {
      const response = await fetch(weatherUrl);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  }


return (
  <>
    <div className="weatherApp">
      <h1>{weather?.condition}</h1>
      <h2>`Temperature in ${weather?.location}: ${weather?.temperature} °C`</h2>
      <List isGoodWeather={weather?.isGoodWeather}/>
      <Form onAddActivity ={handleAddActivity}/>
      </div>
      </>
)
}