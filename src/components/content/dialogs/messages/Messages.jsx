import c from './Messages.module.css'

function Messages(props) {
   return (
      <div className="dialogs">{props.message}</div>
   )
}

export default Messages