import { addMessage, updateDialogText } from '../../../redux/dialogs-reducer'
import { connect } from "react-redux"
import Dialogs from "./Dialogs"
import { withAuthNavigate } from '../../../hoc/withAuthNavigate'


let AuthNavigateComponent = withAuthNavigate(Dialogs)

let mapStateToProps = (state) => ({
   newText: state.dialogsPage.newText,
   dialogs: state.dialogsPage.dialogs,
   messages: state.dialogsPage.messages,
})
export default connect(mapStateToProps, { updateDialogText, addMessage })(AuthNavigateComponent)
