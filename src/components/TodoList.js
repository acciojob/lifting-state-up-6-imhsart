import React from 'react'

const ChildComponent = ({todos, handleComplete}) => {

  return (
    <div className='child'>
      <h2>Child Component</h2>
      <ul>
        {
          todos.map(item => {
            return <li key={`item-${item.id}`}>{item.todo}{item.completed ? null : <button onClick={() => handleComplete(item.id)}>Complete</button>}</li>
          })
        }
      </ul>
    </div>
  )
}

export default ChildComponent