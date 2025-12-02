import React from 'react';

const Task = (props) => {

  
  let priorityColor;
  //change priotity text to lowercase and set colour
  switch (props.priority?.toLowerCase()) {
    case 'low':
      priorityColor = 'green';
      break;
    case 'medium':
      priorityColor = 'orange';
      break;
    case 'high':
      priorityColor = 'red';
      break;
  }

  return (
    <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4', padding: '10px', marginBottom: '10px' }}>
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p>{props.description}</p>
      <p>
        <span style={{
          backgroundColor: priorityColor,
          padding: '2px 6px',
        }}>
          {props.priority}
        </span>
      </p>
      <button onClick={props.markDone} className='doneButton'>Done</button>
      <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
    </div>
  )
}

export default Task;