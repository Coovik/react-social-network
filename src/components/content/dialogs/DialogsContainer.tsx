import { connect } from "react-redux"
import { compose } from 'redux'
import { withAuthNavigate } from '../../../hoc/withAuthNavigate'
import addMessage from '../../../redux/dialogs-reducer'
import { AppStateType } from "../../../redux/redux-store"
import Dialogs from "./Dialogs"


let mapStateToProps = (state: AppStateType) => ({
   dialogs: state.dialogsPage.dialogs,
   messages: state.dialogsPage.messages,
})

export default compose(
   withAuthNavigate,
   connect(mapStateToProps, { addMessage })
)(Dialogs)

