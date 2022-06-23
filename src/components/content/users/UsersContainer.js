import { connect } from "react-redux"
import Users from "./Users"
import { follow, setCurrentPage, setTotalCountUsers, setUsers, toggleIsFetching, unfollow } from "./../../../redux/users-reducer"
import React from "react"
import { usersAPI } from "./../../../api/api"

class UsersClassComponent extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true)
      usersAPI.getUsers(this.props.usersOnPage, this.props.currentPage)
         .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalCountUsers(data.totalCount)

         })
   }
   onChangePage = pageNumber => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true)
      usersAPI.getPage(this.props.usersOnPage, pageNumber)
         .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
         })
   }
   render = () => {
      return <Users
         {...this.props}
         onChangePage={this.onChangePage}
         unfollow={this.props.unfollow}
         follow={this.props.follow}
      />
   }
}

let mapStateToProps = state => {
   return {
      users: state.usersPage.users,
      totalCount: state.usersPage.totalCount,
      usersOnPage: state.usersPage.usersOnPage,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
   }
}


export default connect(mapStateToProps,
   {
      follow, unfollow, setUsers, setTotalCountUsers, setCurrentPage, toggleIsFetching,
   }
)(UsersClassComponent)