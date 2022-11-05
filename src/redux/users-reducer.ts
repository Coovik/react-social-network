import { usersAPI } from "../api/api"
import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferValueTypes } from "./redux-store"
import { Tprofile } from "./profile-reducer"

let intialState = {
   users: {} as Tprofile[],
   totalCount: 0,
   usersOnPage: 5,
   currentPage: 1,
   isFetching: false,
   followInProgress: [] as any,
}
type InitialState = typeof intialState

const usersReducer = (state = intialState, action: Actions): InitialState => {
   switch (action.type) {
      case "USERS-REDUCER/FOLLOW":
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            })
         }
      case "USERS-REDUCER/UNFOLLOW":
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u
            })
         }
      case "USERS-REDUCER/SET_USERS":
         return { ...state, users: [...action.users] }
      case "USERS-REDUCER/SET_TOTAL_COUNT_USERS":
         return { ...state, totalCount: action.totalCount }
      case "USERS-REDUCER/SET_CURRENT_PAGE":
         return { ...state, currentPage: action.currentPage }
      case "USERS-REDUCER/TOGGLE_IS_FETCHING":
         return { ...state, isFetching: action.isFetching }
      case "USERS-REDUCER/TOGGLE_IS_FOLLOWING":
         return {
            ...state,
            followInProgress: action.followInProgress
               ? [...state.followInProgress, action.userId]
               : state.followInProgress.filter((id: string) => id != action.userId)
         }
      default:
         return state
   }
}

// actionCreators 
export const actions = {
   followSuccessed: (userId: string) => ({ type: 'USERS-REDUCER/FOLLOW', userId } as const),
   unfollowSuccessed: (userId: string) => ({ type: 'USERS-REDUCER/UNFOLLOW', userId } as const),
   setUsers: (users: any) => ({ type: 'USERS-REDUCER/SET_USERS', users } as const),
   setTotalCountUsers: (totalCount: number) => (
      { type: 'USERS-REDUCER/SET_TOTAL_COUNT_USERS', totalCount } as const),
   setCurrentPage: (currentPage: number) => (
      { type: 'USERS-REDUCER/SET_CURRENT_PAGE', currentPage } as const),
   toggleIsFetching: (isFetching: boolean) => (
      { type: 'USERS-REDUCER/TOGGLE_IS_FETCHING', isFetching } as const),
   toggleIsFollowing: (followInProgress: boolean, userId: string) => (
      { type: 'USERS-REDUCER/TOGGLE_IS_FOLLOWING', followInProgress, userId } as const),
}
type Actions = ReturnType<InferValueTypes<typeof actions>>

// thunks
type Thunk = ThunkAction<void, AppStateType, unknown, Actions>

export const getUsers = (usersOnPage: number, page: number): Thunk => {
   return dispatch => {
      dispatch(actions.toggleIsFetching(true))
      usersAPI.getUsers(usersOnPage, page)
         .then(data => {
            dispatch(actions.toggleIsFetching(false))
            dispatch(actions.setUsers(data.items))
            dispatch(actions.setTotalCountUsers(data.totalCount))
         })
   }
}
export const follow = (userId: string): Thunk => {
   return dispatch => {
      dispatch(actions.toggleIsFollowing(true, userId))
      usersAPI.follow(userId).then(resultCode => {
         if (resultCode === 0) {
            dispatch(actions.followSuccessed(userId))
            dispatch(actions.toggleIsFollowing(false, userId))
         }
      })
   }
}
export const unfollow = (userId: string): Thunk => {
   return dispatch => {
      dispatch(actions.toggleIsFollowing(true, userId))
      usersAPI.unfollow(userId).then(resultCode => {
         if (resultCode === 0) {
            dispatch(actions.unfollowSuccessed(userId))
            dispatch(actions.toggleIsFollowing(false, userId))
         }
      })
   }
}


export default usersReducer