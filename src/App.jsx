import {Form} from "./componente/Form/form";
import {List} from "./componente/List/list";
import useLocalStorageState from 'use-local-storage-state'
import './App.css';
import {getWeather} from "./utils/fetch";

export function App() {
//Const  
const [activities, setActivities] = useLocalStorageState ("activites",{defaultValue: {}});
const weather = getWeather();

//Add activity
function handleAddActivity (newActivity) {
    setActivities([...activities, {id: uid(),...newActivity}]);
  }
  
//Delete activity
function handleDeleteActivity(id){
  setActivities(activities.map((activity)=>(activity.id === id? false : true)))
  }
useEffect(() => {
    const interval = setInterval(() => weather, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

return (
  <>
    <div className="weatherApp">
      <h1>{weather?.condition}</h1>
      <h2>`Temperature in ${weather?.location}: ${weather?.temperature} °C`</h2>
      <List isGoodWeather={weather?.isGoodWeather} onDeleteActivity={handleDeleteActivity}/>
      <Form onAddActivity ={handleAddActivity}/>
      </div>
      </>
)
}