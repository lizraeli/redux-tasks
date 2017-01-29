import React from 'react';
import style from '../style.js'
//import logo from './logo.svg';

import AddTask from '../containers/AddTask'
import TaskListContainer from '../containers/TaskListContainer'

class App extends React.component {
    render() {
        return (
            <div>
                <h2 style={style.center}>
                    Redux Task Board
                </h2>
                <AddTask/>
                <TaskListContainer title={this.props.params.title || ''}/>
            </div>
        )
    }
}

export default App;
