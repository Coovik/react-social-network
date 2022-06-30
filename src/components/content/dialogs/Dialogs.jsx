import c from './Dialogs.module.css'
import Messages from './messages/Messages'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'


const MessagesForm = props => <form className={c.input} onSubmit={props.handleSubmit}>
   <div>
      <Field
         className={c.textarea}
         name='newMessageBody'
         placeholder='add text'
         component='textarea'
      />
   </div>
   <div>
      <button className={c.button} >send</button>
   </div>
</form>
const ReduxFormMessage = reduxForm({ form: 'message' })(MessagesForm)

function Dialogs(props) {
   let dialogList = props.dialogs.map(dialog => <div className={c.item}><NavLink className={navData => navData.isActive ? c.active : ""} to={`/dialogs/${dialog.id}`} >{dialog.name}</NavLink></div>)
   let tagMessages = props.messages.map(message => <Messages message={message.message} id={message.id} />)

   const addMessage = values => props.addMessage(values.newMessageBody)

   return (
      <div className={c.dialogs}>
         <div className={c.dialogItem}>
            {dialogList}
         </div>
         <div className={c.messages}>
            {tagMessages}
            {/* <div className={c.input}>
               <textarea
                  className={c.textarea}
                  placeholder='add text'
                  onChange={onChangeText}
                  value={props.newText}
               />
               <div className={c.button} onClick={send}>send</div>
            </div> */}
            <ReduxFormMessage onSubmit={addMessage} />
         </div>
      </div>
   )
}
export default Dialogs