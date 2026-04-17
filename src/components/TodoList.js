import React from 'react'

const ChildComponent = ({todos, handleComplete}) => {

  return (
    <div className='child'>
      <h2>Child Component</h2>
      <ul>
        {
          todos.map((item,index) => {
            return <li key={`item-${index}`} >{item.todo} {item.completed ? null : <button onClick={() => handleComplete(index)}>Complete</button>}</li>
          })
        }
      </ul>
    </div>
  )
}

export default ChildComponent