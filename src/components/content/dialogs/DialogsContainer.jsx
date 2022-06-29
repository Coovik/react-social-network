import { addMessage, updateDialogText } from '../../../redux/dialogs-reducer'
import { connect } from "react-redux"
import Dialogs from "./Dialogs"
import { withAuthNavigate } from '../../../hoc/withAuthNavigate'
import { compose } from 'redux'


let mapStateToProps = (state) => ({
   newText: state.dialogsPage.newText,
   dialogs: state.dialogsPage.dialogs,
   messages: state.dialogsPage.messages,
})

export default compose(
   // withAuthNavigate,
   connect(mapStateToProps, { updateDialogText, addMessage })
)(Dialogs)

