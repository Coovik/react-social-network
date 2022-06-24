import React from "react"
import Header from "./Header"
import { getLogin } from "./../../redux/auth-reducer"
import { connect } from "react-redux"


class HeaderContainer extends React.Component {
   componentDidMount() { this.props.getLogin() }

   render() {
      return <Header {...this.props} />
   }
}

const mapStateToProps = state => ({
   login: state.auth.login,
   isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { getLogin })(HeaderContainer)