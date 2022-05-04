import c from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Messages from './messages/Messages';




function Dialogs(props) {
   let tagDialogs = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
   let tagMessages = props.messages.map(message => <Messages message={message.message} id={message.id} />)
   return (
      <div className={c.dialogs}>
         <div className={c.dialogs}>
            {tagDialogs}
         </div>
         <div className={c.messages}>
            {tagMessages}
         </div>
      </div>
   )
}
export default Dialogs