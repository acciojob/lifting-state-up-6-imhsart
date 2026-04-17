
import React, {useState} from "react";
import './../styles/App.css';
import ChildComponent from './TodoList'
const App = () => {
  const [todos, setTodos] = useState([
    {todo:'Learn React', completed:true}, 
    {todo:'Build a React app', completed:true},
    {todo:'Deploy the React app', completed:false}
  ])

  const handleComplete = (idx) => {
    setTodos(prev => prev.map((val,index) => index === idx ? {...val, completed:true} : val))
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
        <ChildComponent todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
