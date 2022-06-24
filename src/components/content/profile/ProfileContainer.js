import { connect } from "react-redux"
import React from 'react';
import Profile from "./Profile"
import { getUser } from "../../../redux/profile-reducer"
import { useLocation, useNavigate, useParams } from "react-router-dom";



class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.router.params.id
      if (!userId) userId = 24538
      this.props.getUser(userId)
   }
   render() {
      return <Profile {...this.props} />
   }
}

let mapStateToProps = state => ({
   profile: state.profilePage.profile,
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

export default connect(mapStateToProps, { getUser })(withRouter(ProfileContainer))