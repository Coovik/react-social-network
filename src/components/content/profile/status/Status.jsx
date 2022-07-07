import { useEffect, useState } from "react"

const Status = props => {
   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   const activateEditMode = () => setEditMode(true)

   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
   }

   useEffect(() => {
      if (status !== props.status) setStatus(props.status)
   }, [props.status])

   const onChangeStatus = e => setStatus(e.currentTarget.value)

   return <>
      <div>status:</div>
      {!editMode &&
         <div><span onClick={activateEditMode}>{props.status || '......'}</span></div>
      }
      {editMode &&
         <div><input
            onChange={onChangeStatus}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}>
         </input></div>
      }
   </>
}

export default Status