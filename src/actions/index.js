export const addTask = (id, title, text) => {
  return {
    type: 'ADD_TASK',
    id,
    title,
    text
  }
}

export const editTask = (id) => {
  return {
    type: 'START_EDIT',
    id
  }
}

export const deleteTask = (id) => {
  return {
    type: 'DELETE_TASK',
    id
  }
}

export const saveTask = (id, title, text) => {
  return {
    type: 'SAVE_EDIT',
    id,
    title,
    text
  }
}

export const setTasks = (tasks) => {
  return {
    type: 'SET_TASKS',
    tasks: tasks,
    nextTaskId: tasks.length
  }
}
