import { Field, Form, Formik, FormikValues } from 'formik'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import c from './Dialogs.module.css'
import Messages from './messages/Messages'


type Tprops = {
   dialogs: { id: number, name: string }[]
   messages: { id: number, message: string }[]
   addMessage: (text: string) => void
}
const Dialogs: FC<Tprops> = props => {
   let dialogList = props.dialogs
      .map(dialog => <div className={c.item}>
         <NavLink
            className={navData => navData.isActive ? c.active : ''}
            to={`/dialogs/${dialog.id}`} >{dialog.name}
         </NavLink>
      </div>
      )
   let tagMessages = props.messages
      .map(message => <Messages message={message.message} id={message.id} />)

   const addMessage = (values: FormikValues) => props.addMessage(values.newMessage)

   return (
      <div className={c.dialogs}>
         <div className={c.dialogItem}>
            {dialogList}
         </div>
         <div className={c.messages}>
            {tagMessages}
            <Formik
               initialValues={{ newMessage: '' }}
               onSubmit={addMessage}
            >
               <Form>
                  <Field name='newMessage' placeholder='add text' type='textarea' />
               </Form>
            </Formik>
         </div>
      </div>
   )
}
export default Dialogs
