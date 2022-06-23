import { connect } from "react-redux"
import Users from "./Users"
import { follow, setCurrentPage, setTotalCountUsers, setUsers, toggleIsFetching, unfollow } from "./../../../redux/users-reducer"
import React from "react"
import * as axios from 'axios'

class UsersClassComponent extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${this.props.currentPage}`,
         { withCredentials: true })
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCountUsers(response.data.totalCount)

         })
   }
   onChangePage = pageNumber => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${pageNumber}`,
         { withCredentials: true })
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
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