import { combineReducers } from 'redux'
import tasks from './tasks'
import sort from './sort'

const rootReducer = combineReducers({
  tasks,
  sort
})

export default rootReducer
