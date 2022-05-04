import c from './DialogItem.module.css'


function DialogItem(props) {
   return (
      <div className="dialogs">{props.name}</div>
   )
}
export default DialogItem