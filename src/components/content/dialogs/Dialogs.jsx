import c from './Dialogs.module.css'
import Messages from './messages/Messages'
import { Navigate, NavLink } from 'react-router-dom'


function Dialogs(props) {
   let dialogList = props.dialogs.map(dialog => <div className={c.item}><NavLink className={navData => navData.isActive ? c.active : ""} to={`/dialogs/${dialog.id}`} >{dialog.name}</NavLink></div>)
   let tagMessages = props.messages.map(message => <Messages message={message.message} id={message.id} />)

   let send = () => {
      props.addMessage()
   }
   let onChangeText = (e) => {
      let text = e.target.value
      props.updateDialogText(text)
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
                  value={props.newText}
               />
               <div className={c.button} onClick={send}>send</div>
            </div>
         </div>
      </div>
   )
}
export default Dialogs