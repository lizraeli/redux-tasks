import { connect } from 'react-redux'
import { saveTask } from '../actions'
import EditableTask from '../components/EditableTask'


const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id,
    title: ownProps.title,
    text: ownProps.text
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSaveClick: (id, title, text) => {
      dispatch(saveTask(id, title, text))
    }
  }
}

const EditableTaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableTask)

export default EditableTaskContainer
