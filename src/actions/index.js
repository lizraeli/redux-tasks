let nextTaskId = 0
export const addTask = (title, text) => {
  return {
    type: 'ADD_TASK',
    id: nextTaskId++,
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
