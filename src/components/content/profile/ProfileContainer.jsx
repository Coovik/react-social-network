import { connect } from "react-redux"
import React from 'react';
import Profile from "./Profile"
import { getUser, getStatus, updateStatus } from "../../../redux/profile-reducer"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthNavigate } from "./../../../hoc/withAuthNavigate"
import { compose } from "redux";



class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.router.params.id
      if (!userId) userId = 24538
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
})
function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }

   return ComponentWithRouterProp;
}

export default compose(
   withRouter,
   connect(mapStateToProps, { getUser, getStatus, updateStatus }),
   withAuthNavigate,
)(ProfileContainer)