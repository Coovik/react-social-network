import c from './Dialogs.module.css'
import Messages from './messages/Messages';
import { NavLink } from 'react-router-dom';


function Dialogs(props) {
   let dialogList = props.data.dialogs.map(dialog => <div className={c.item}><NavLink className={(navData) => navData.isActive ? c.active : ""} to={`/dialogs/${dialog.id}`} >{dialog.name}</NavLink></div>)
   let tagMessages = props.data.messages.map(message => <Messages message={message.message} id={message.id} />)
   return (
      <div className={c.dialogs}>
         <div className={c.dialogItem}>{dialogList}</div>
         <div className={c.messages}>{tagMessages}</div>
      </div>
   )
}
export default Dialogs