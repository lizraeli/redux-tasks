import React, { PropTypes } from 'react'
import style from '../style.js'


const EditableTask = ({ id, title, text, saveEdit}) => {
  let titleInput;
  let textInput;


  function onSaveClick(id){
    saveEdit(id, titleInput.value, textInput.value)
  }

  return (

  <div style={style.taskStyle}>

      <input ref={input => {
                  titleInput = input
                }}
       type="text" defaultValue={title}
      />

       <br/>
       <textarea ref={input => {
                      textInput = input
                     }}
        type="text" defaultValue={text}
       />
       <br/>
    <button onClick={()=>onSaveClick(id)}>Save</button>
  </div>
)}

EditableTask.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  saveEdit: PropTypes.func.isRequired
}

export default EditableTask
