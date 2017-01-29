import React, { PropTypes } from 'react'

const divStyle = {
  borderStyle:"outset",
  float:"left",
  padding:"5px",
  margin:"5px"
}

const divTextArea = {
  whiteSpace: "pre-line"
}

const Task = ({ editTask, deleteTask, title, text}) => (
  <div style={divStyle}>

    <b>{title}</b>
       {": "}
       <br/>
    <div style={divTextArea}> {text} </div>
       {"  "}
       <button onClick={editTask}> Edit </button>
       {"  "}
       <button onClick={deleteTask}> Delete </button>

  </div>
)

Task.propTypes = {
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Task
