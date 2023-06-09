import { useState } from 'react'
import { useLocalStorageState } from 'use-local-storage-state'
import './App.css'

function App() {
  const [activities, setactivities] = useLocalStorageState ("activites",{defaultValue: []});
  function handleAddActivity (newActivity) {
    setactivities([...activities, {id: uid(),...newActivity}]);
  }


return (
  <>
    <div className="weatherApp">
      <h1></h1>
      <List/>
      <Form onAddActivity ={handleAddActivity}/>
      </div>
      </>
)
}