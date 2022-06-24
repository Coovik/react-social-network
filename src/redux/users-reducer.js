import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let intialState = {
   users: [],
   totalCount: 0,
   usersOnPage: 5,
   currentPage: 1,
   isFetching: false,
   followInProgress: [],
}

const usersReducer = (state = intialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u
            })
         }
      case SET_USERS:
         return { ...state, users: [...action.users] }
      case SET_TOTAL_COUNT_USERS:
         return { ...state, totalCount: action.totalCount }
      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }
      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }
      case TOGGLE_IS_FOLLOWING:
         return {
            ...state,
            followInProgress: action.followInProgress
               ? [...state.followInProgress, action.userId]
               : state.followInProgress.filter(id => id != action.userId)
         }
      default:
         return state
   }
}

// actionCreators 
export const followSuccessed = userId => ({ type: FOLLOW, userId })
export const unfollowSuccessed = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setTotalCountUsers = totalCount => ({ type: SET_TOTAL_COUNT_USERS, totalCount })
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowing = (followInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING, followInProgress, userId })

// thunks
export const getUsers = (usersOnPage, page) => {
   return dispatch => {
      dispatch(toggleIsFetching(true))
      usersAPI.getUsers(usersOnPage, page)
         .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCountUsers(data.totalCount))
         })
   }
}
export const follow = (userId) => {
   return dispatch => {
      dispatch(toggleIsFollowing(true, userId))
      usersAPI.follow(userId).then(resultCode => {
         if (resultCode === 0) {
            dispatch(followSuccessed(userId))
            dispatch(toggleIsFollowing(false, userId))
         }
      })
   }
}
export const unfollow = (userId) => {
   return dispatch => {
      dispatch(toggleIsFollowing(true, userId))
      usersAPI.unfollow(userId).then(resultCode => {
         if (resultCode === 0) {
            dispatch(unfollowSuccessed(userId))
            dispatch(toggleIsFollowing(false, userId))
         }
      })
   }
}


export default usersReducer