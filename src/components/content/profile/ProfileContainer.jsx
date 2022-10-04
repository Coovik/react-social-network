import { connect } from "react-redux"
import React from 'react';
import Profile from "./Profile"
import { getUser, getStatus, updateStatus, setPhoto } from "../../../redux/profile-reducer"
import { withAuthNavigate } from "./../../../hoc/withAuthNavigate"
import { compose } from "redux";
import { withRouter } from "../../../hoc/withRouter";


class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.router.params.id
      if (!userId) userId = this.props.userId
      this.props.getUser(userId)
      this.props.getStatus(userId)
   }
   render() {
      return <Profile {...this.props} />
   }
}

let mapStateToProps = state => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   userId: state.auth.id,
})

export default compose(
   withRouter,
   connect(mapStateToProps, { getUser, getStatus, updateStatus, setPhoto }),
   withAuthNavigate,
)(ProfileContainer)