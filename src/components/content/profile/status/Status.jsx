import React from "react"

class Status extends React.Component {
   state = {
      editMode: false,
      status: this.props.status,
   }

   activateEditMode = () => this.setState({
      editMode: true,
   })
   deactivateEditMode = () => {
      this.setState({ editMode: false, })
      this.props.updateStatus(this.state.status)
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) this.setState({ status: this.props.status })
   }

   onChangeStatus = e => this.setState({ status: e.currentTarget.value })

   render() {
      return <>
         <div>status:</div>
         {!this.state.editMode &&
            <div><span onClick={this.activateEditMode}>{this.props.status || '......'}</span></div>
         }
         {this.state.editMode &&
            <div><input
               onChange={this.onChangeStatus}
               autoFocus={true}
               onBlur={this.deactivateEditMode}
               value={this.state.status}>
            </input></div>
         }
      </>
   }
}

export default Status