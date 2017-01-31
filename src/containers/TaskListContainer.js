import { connect } from 'react-redux'
import { saveTask, editTask, deleteTask } from '../actions'
import TaskList from '../components/TaskList'
import {deleteTaskFromServer, editTaskOnServer} from '../fakeServer/index'

const getTasks = (tasks, title) => {
  if (!title){
    return tasks
  } else {
    return tasks.filter(task => task.title === title)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: getTasks(state.tasks, ownProps.title)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (id) => {
      dispatch(editTask(id))
    },

    deleteTask: (id)=> {
      // deleting from server
      deleteTaskFromServer({
        id: id
      })
      .then(response=>{
        console.log(response);
        dispatch(deleteTask(id));
      })
    },

    saveEdit: (id, title, text) => {
      // editing on server
      editTaskOnServer({
        id: id,
        title: title,
        text: text
      })
      .then(response => {
        console.log(response)
        dispatch(saveTask(id, title, text))
      })

    }
  }
}

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default TaskListContainer
