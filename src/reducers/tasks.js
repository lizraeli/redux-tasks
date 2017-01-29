const taskReducer = (state = {}, action) => {

  switch (action.type){
    case 'ADD_TASK':
      return {
        id: action.id,
        title: action.title,
        text: action.text,
        editable: false
      }
    case 'START_EDIT':
      return Object.assign({}, state, {editable: true});

    case 'SAVE_EDIT':
      return Object.assign({}, state, { title: action.title,
                                        text: action.text,
                                        editable: false
                                       })
    default:
      return state;
  }
}

const tasksReducer = (state = [], action) => {
    console.log("state:", state)
    console.log("action:", action)
    console.log("---")

  switch (action.type){
    case 'ADD_TASK':
      return ([...state, taskReducer(undefined, action)])
    case 'START_EDIT':
      return (state.map(task => task.id === action.id ?
                                taskReducer(task, action) : task ))
    case 'SAVE_EDIT':
      return (state.map(task => task.id === action.id ?
                                taskReducer(task, action) : task ))
    case 'DELETE_TASK':
      return (state.filter(task => task.id !== action.id))

    default:
      return state;
  }
}

export default tasksReducer
