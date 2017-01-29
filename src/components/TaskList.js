import React, { PropTypes } from 'react'
import Task from './Task'
import EditableTask from './EditableTask'
import '../index.css'


const TaskList = ({ tasks, editTask, deleteTask, saveEdit }) => (
  <ul>
    {
    tasks.map(task =>

      task.editable?
        <EditableTask
          key={task.id}
          id={task.id}
          title={task.title}
          text={task.text}
          saveEdit={saveEdit}
        />
        :
        <Task
          key={task.id}
          title={task.title}
          text={task.text}
          editTask={() => editTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
    )
   }
  </ul>
)

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  title: PropTypes.string.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  saveEdit: PropTypes.func.isRequired
}

export default TaskList
