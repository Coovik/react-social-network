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
      send: () => {
         dispatch(addMessageActionCreator())
      },
      onChangeText: (text) => {
         dispatch(updateDialogTextActionCreator(text))
      }
   }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer