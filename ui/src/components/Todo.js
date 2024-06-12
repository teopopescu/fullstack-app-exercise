

import axios from 'axios'
import React from 'react'

function TodoItem(props) {
    const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/api/todo${title}`)
        .then(res => console.log(res.data)) }

// Update a todo
  const updateTodoHandler = (title, description) => {
    axios.put(`http://localhost:8000/api/todo${title}/?desc=${description}`)
      .then(res => console.log(res))
};

  
    return (
        <div>
            <p>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.title} - </span> {props.todo.description}  
                <button onClick={() => deleteTodoHandler(props.todo.title)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}> Delete</button>

                <hr></hr>
            </p>
        </div>
    )
}

export default TodoItem;
