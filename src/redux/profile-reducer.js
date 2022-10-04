import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const REFRESH_PHOTOS = 'REFRESH_PHOTOS'

let intialState = {
   postsName: [
      { id: 1, name: 'some post 1' },
      { id: 2, name: 'some post 2' },
      { id: 3, name: 'some post 3' },
      { id: 4, name: 'some post 4' },
   ],
   profile: null,
   status: '',
}

const profileReducer = (state = intialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postsName: [...state.postsName, { id: state.postsName.length + 1, name: action.textPost }],
            newPostText: '',
         }
      case DELETE_POST:
         return { ...state, postsName: state.postsName.filter((p, i) => i != action.id) }
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile }
      case SET_STATUS:
         return { ...state, status: action.status }
      case REFRESH_PHOTOS:
         return { ...state, profile: { ...state.profile, photos: action.photos } }
      default:
         return state
   }
}

// actionCreators
export const addPost = textPost => ({ type: ADD_POST, textPost })
export const deletePost = id => ({ type: DELETE_POST, id })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setStatus = status => ({ type: SET_STATUS, status })
export const refreshPhotos = photos => ({ type: REFRESH_PHOTOS, photos })

// thunks
export const getUser = userId => {
   return dispatch => profileAPI.getProfile(userId).then(data => dispatch(setUserProfile(data)))
}
export const getStatus = userId => async dispatch => {
   const data = await profileAPI.getStatus(userId)
   dispatch(setStatus(data))
}
export const updateStatus = status => {
   return dispatch => profileAPI.updateStatus(status).then(response => {
      if (response === 0) dispatch(setStatus(status))
   })
}
export const setPhoto = photo => async dispatch => {
   const response = await profileAPI.updateAvatar(photo)
   dispatch(refreshPhotos(response.data.data.photos))
}

export default profileReducer

