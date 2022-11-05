import { connect } from 'react-redux'
import Users from './Users'
import { actions, follow, getUsers, unfollow } from './../../../redux/users-reducer'
import { useEffect, FC } from 'react'
import { AppStateType } from '../../../redux/redux-store'
import { Tprofile } from '../../../redux/profile-reducer'

type Tprops = {
   usersOnPage: number
   currentPage: number
   totalCount: number
   isFetching: boolean
   users: Tprofile[]
   followInProgress: string[]

   actions: {
      setCurrentPage: (currentPage: number) => void
   }
   getUsers: (usersOnPage: number, page: number) => void
   unfollow: (id: string) => void
   follow: (id: string) => void
}
const UsersComponent: FC<Tprops> = props => {
   useEffect(() => props.getUsers(props.usersOnPage, props.currentPage), [])

   const onChangePage = (pageNumber: number) => {
      props.actions.setCurrentPage(pageNumber)
      props.getUsers(props.usersOnPage, pageNumber)
   }
   return <Users {...props} onChangePage={onChangePage} />
}

let mapStateToProps = (state: AppStateType) => {
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
   getUsers,
   actions,
}
)(UsersComponent)