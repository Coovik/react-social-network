import { connect } from "react-redux"
import Users from "./Users"
import { follow, getUsers, setCurrentPage, toggleIsFollowing, unfollow } from "./../../../redux/users-reducer"
import React from "react"

class UsersClassComponent extends React.Component {
   componentDidMount() { this.props.getUsers(this.props.usersOnPage, this.props.currentPage) }

   onChangePage = pageNumber => {
      this.props.setCurrentPage(pageNumber)
      this.props.getUsers(this.props.usersOnPage, pageNumber)
   }
   render = () => {
      return <Users {...this.props} onChangePage={this.onChangePage} />
   }
}

let mapStateToProps = state => {
   return {
      users: state.usersPage.users,
      totalCount: state.usersPage.totalCount,
      usersOnPage: state.usersPage.usersOnPage,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followInProgress: state.usersPage.followInProgress,
   }
}


export default connect(mapStateToProps, {
   follow,
   unfollow,
   setCurrentPage,
   toggleIsFollowing,
   getUsers,
}
)(UsersClassComponent)