import c from './Messages.module.css'

function Messages(props) {
   return (
      <div className="messages">{props.message}</div>
   )
}

export default Messages