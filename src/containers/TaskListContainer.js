import { connect } from 'react-redux'
import { saveTask, editTask, deleteTask } from '../actions'
import TaskList from '../components/TaskList'


const getTasks = (tasks, title) => {
  if (title === ''){
    return tasks
  } else {
    return tasks.filter(task => task.tite === title)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: getTasks(state, ownProps.title)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (id) => {
      dispatch(editTask(id))
    },
    deleteTask: (id)=> {
      dispatch(deleteTask(id))
    },
    saveEdit: (id, title, text) => {
      dispatch(saveTask(id, title, text))
    }
  }
}

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default TaskListContainer
