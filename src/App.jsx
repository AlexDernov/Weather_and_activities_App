import {Form} from "./components/Form/form";
import {List} from "./components/List/list";
import { useState } from 'react'
import { useLocalStorageState } from 'use-local-storage-state'
import './App.css'

function App() {
  const [weather, setWeather] = useState({});
  const [activities, setActivities] = useLocalStorageState ("activites",{defaultValue: {}});
  function handleAddActivity (newActivity) {
    setActivities([...activities, {id: uid(),...newActivity}]);
  }
  
 
  async function getWeather() {
    const weatherUrl = "https://example-apis.vercel.app/api/weather";
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