
import React, {useState} from "react";
import './../styles/App.css';
import ChildComponent from './TodoList'
const App = () => {
  const [todos, setTodos] = useState([
    {id:1,todo:'Learn React', completed:false}, 
    {id:2,todo:'Build a React app', completed:false},
    {id:3,todo:'Deploy the React app', completed:false}
  ])

  const handleComplete = (idx) => {
    setTodos(prev => prev.map(val => val.id === idx ? {...val, completed:true} : val))
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
        <ChildComponent todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
