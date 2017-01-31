import React from 'react';
import style from '../style.js'
import {setTasks} from '../actions/index'
//import logo from './logo.svg';

import AddTask from '../containers/AddTask'
import TaskListContainer from '../containers/TaskListContainer'
import {getTasksFromServer} from  '../fakeServer/index'



class App extends React.Component {
    componentWillMount(){

     const { store } = this.context;
     // Getting tasks from 'server'

     getTasksFromServer()
     .then(tasks => {
       console.log(tasks)
       // Dispatching tasks to the store
       store.dispatch(setTasks(tasks))
     });

    // console.log('state:', store.getState())
    }

  render(){
    console.log('params: ', this.props.params)
  //    const { store } = this.context;
  //  console.log('state:', store.getState())
  //    console.log('store:', store)
    return (
      <div>
            <h2 style={style.center}>
              Redux Tasks
            </h2>
            {!this.props.params.title?
               <AddTask/> : null
            }

            <TaskListContainer title={this.props.params.title}/>
       </div>
     )
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}
export default App;
