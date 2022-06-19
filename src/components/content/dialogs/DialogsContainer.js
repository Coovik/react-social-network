import { addMessageActionCreator, updateDialogTextActionCreator } from '../../../redux/dialogs-reducer'
import { connect } from "react-redux"
import Dialogs from "./Dialogs"


let mapStateToProps = (state) => {
   return {
      newText: state.dialogsPage.newText,
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => {
         dispatch(addMessageActionCreator())
      },
      updateText: (text) => {
         dispatch(updateDialogTextActionCreator(text))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)
