
import React, {useState} from "react";
import './../styles/App.css';
import ChildComponent from './TodoList'
const App = () => {
  const [todos, setTodos] = useState([
    {todo:'Learn React', status:false}, 
    {todo:'Build a React app', status:false},
    {todo:'Deploy the React app', status:false}
  ])

  const handleComplete = (idx) => {
    setTodos(todos.map((val,index) => index === idx ? {...val, status:true} : val))
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
        <ChildComponent todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
