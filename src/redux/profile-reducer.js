import { porofileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let intialState = {
   postsName: [
      { name: 'some post 1' },
      { name: 'some post 2' },
      { name: 'some post 3' },
      { name: 'some post 4' },
   ],
   profile: null,
   status: '',
}

const profileReducer = (state = intialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postsName: [...state.postsName, { name: action.textPost }],
            newPostText: '',
         }
      case DELETE_POST:
         return { ...state, postsName: state.postsName.filter((p, i) => i != action.id) }
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile }
      case SET_STATUS:
         return { ...state, status: action.status }
      default:
         return state
   }
}

// actionCreators
export const addPost = textPost => ({ type: ADD_POST, textPost })
export const deletePost = id => ({ type: DELETE_POST, id })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setStatus = status => ({ type: SET_STATUS, status })

// thunks
export const getUser = userId => {
   return dispatch => porofileAPI.getProfile(userId).then(data => dispatch(setUserProfile(data)))
}
export const getStatus = userId => {
   return dispatch => porofileAPI.getStatus(userId).then(data => dispatch(setStatus(data)))
}
export const updateStatus = status => {
   return dispatch => porofileAPI.updateStatus(status).then(response => {
      if (response === 0) dispatch(setStatus(status))
   })
}

export default profileReducer

