import React from "react"

class Status extends React.Component {
   state = {
      editMode: false
   }
   activateEditMode = () => this.setState({ editMode: true })
   deactivateEditMode = () => this.setState({ editMode: false })

   render() {
      return <>
         <div>status:</div>
         {!this.state.editMode &&
            <div><span onClick={this.activateEditMode}>{this.props.status}</span></div>
         }
         {this.state.editMode &&
            <div><textarea autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></textarea></div>
         }
      </>
   }
}

export default Status