import { connect } from "react-redux"
import Users from "./Users"
import { followAC, setCurrentPageAC, setTotalCountUsersAC, setUsersAC, unfollowAC } from "./../../../redux/users-reducer"

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalCount: state.usersPage.totalCount,
      usersOnPage: state.usersPage.usersOnPage,
      currentPage: state.usersPage.currentPage,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      follow: userId => dispatch(followAC(userId)),
      unfollow: userId => dispatch(unfollowAC(userId)),
      setUsers: users => dispatch(setUsersAC(users)),
      setTotalCount: totalCount => dispatch(setTotalCountUsersAC(totalCount)),
      setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)