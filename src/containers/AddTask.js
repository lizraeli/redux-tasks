import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions/index'
import style from '../style.js'
import {postTaskToServer} from '../fakeServer/index'

let AddTask = ({dispatch}) => {
    let titleInput;
    let textInput;

    function submit(e) {
        e.preventDefault()
        console.log(textInput.value)
        // Check if input is not empty or just spaces
        if (!titleInput.value.trim()) {
            return
        }
        let text = textInput.value || ""
        postTaskToServer({
          title: titleInput.value,
          text: text
        })
        .then(id => {
          dispatch(addTask(id, titleInput.value, text))
          titleInput.value = ''
          textInput.value = ''
        })
    }

    return (

        <div style={style.flexCenter}>

            <form style={style.form} onSubmit={(e) => submit(e)}>
                <div style={style.flexSpace}>
                        <span> {"Title: "} </span>
                        <input style={{width:"175px"}} ref={input => {
                            titleInput = input
                        }}/>

                </div>

                <br/>

                <div style={style.flexSpace}>
                    <span>{"Text: "} </span>

                    <textarea ref={input => {
                        textInput = input
                    }}/>
                </div>

                <br/>

                <div style={style.center}>
                    <button type="submit">
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    )
}

AddTask = connect()(AddTask)

export default AddTask
