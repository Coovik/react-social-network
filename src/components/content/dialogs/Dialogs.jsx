import c from './Dialogs.module.css'
import Messages from './messages/Messages';
import { NavLink } from 'react-router-dom';
import { addMessageActionCreator, updateDialogTextActionCreator } from '../../../redux/dialogs-reducer';


function Dialogs(props) {
   let dialogList = props.data.dialogs.map(dialog => <div className={c.item}><NavLink className={navData => navData.isActive ? c.active : ""} to={`/dialogs/${dialog.id}`} >{dialog.name}</NavLink></div>)
   let tagMessages = props.data.messages.map(message => <Messages message={message.message} id={message.id} />)

   let send = () => {
      props.dispatch(addMessageActionCreator())
   }
   let onChangeText = (e) => {
      let text = e.target.value
      props.dispatch(updateDialogTextActionCreator(text))
   }

   return (
      <div className={c.dialogs}>
         <div className={c.dialogItem}>
            {dialogList}
         </div>
         <div className={c.messages}>
            {tagMessages}
            <div className={c.input}>
               <textarea
                  className={c.textarea}
                  placeholder='add text'
                  onChange={onChangeText}
                  value={props.data.newText}
               />
               <div className={c.button} onClick={send}>send</div>
            </div>
         </div>
      </div>
   )
}
export default Dialogs