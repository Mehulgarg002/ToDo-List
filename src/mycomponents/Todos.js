import React from 'react'
import TodoItem from "./TodoItem"

function Todos(props) {
  let mystyle = {
    minHeight: '70vh',
    margin: '40px auto'
  }
  return (
    <div className='container' style={mystyle}>
    <h3 className='my-3'>Todos list</h3>
    {console.log(props.todos)}
    {props.todos.length === 0 ? 'No Todos To Display' : props.todos.map((todo) => (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />))
    }
  </div>
  )
}

export default Todos

