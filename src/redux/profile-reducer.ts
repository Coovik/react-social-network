import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { profileAPI } from '../api/api'
import { AppStateType, InferType } from './redux-store'

let intialState = {
   postsName: [
      { id: 1, name: 'some post 1' },
      { id: 2, name: 'some post 2' },
      { id: 3, name: 'some post 3' },
      { id: 4, name: 'some post 4' },
   ],
   profile: {},
   status: '',
   newPostText: '',
}
type InitialStateType = typeof intialState

const profileReducer = (state = intialState, action: Actions): InitialStateType => {
   switch (action.type) {
      case 'PROFILE-REDUCER/ADD_POST':
         return {
            ...state,
            postsName: [...state.postsName, { id: state.postsName.length + 1, name: action.textPost }],
            newPostText: '',
         }
      case 'PROFILE-REDUCER/DELETE_POST':
         return { ...state, postsName: state.postsName.filter((p, i) => i != action.id) }
      case 'PROFILE-REDUCER/SET_USER_PROFILE':
         return { ...state, profile: action.profile }
      case 'PROFIL-REDUCERE/SET_STATUS':
         return { ...state, status: action.status }
      case 'PROFILE-REDUCER/REFRESH_PHOTOS':
         return { ...state, profile: { ...state.profile, photos: action.photos } }
      default:
         return state
   }
}

// actionCreators
export const actions = {
   addPost: (textPost: string) => ({ type: 'PROFILE-REDUCER/ADD_POST', textPost } as const),
   deletePost: (id: number) => ({ type: 'PROFILE-REDUCER/DELETE_POST', id } as const),
   setUserProfile: (profile: any) => ({ type: 'PROFILE-REDUCER/SET_USER_PROFILE', profile } as const),
   setStatus: (status: string) => ({ type: 'PROFIL-REDUCERE/SET_STATUS', status } as const),
   refreshPhotos: (photos: any) => ({ type: 'PROFILE-REDUCER/REFRESH_PHOTOS', photos } as const)
}
type Actions = ReturnType<InferType<typeof actions>>

// thunks
type Thunk = ThunkAction<void, AppStateType, unknown, Actions>
export const getUser = (userId: number): Thunk => async dispatch => {
   const data = await profileAPI.getProfile(userId)
   dispatch(actions.setUserProfile(data))
}
export const getStatus = (userId: number): Thunk => async dispatch => {
   const data = await profileAPI.getStatus(userId)
   dispatch(actions.setStatus(data))
}
export const updateStatus = (status: string): Thunk => async dispatch => {
   const response = await profileAPI.updateStatus(status)
   if (response === 0) dispatch(actions.setStatus(status))
}
export const setPhoto = (photo: any): Thunk => async dispatch => {
   const response = await profileAPI.updateAvatar(photo)
   dispatch(actions.refreshPhotos(response.data.data.photos))
}

export default profileReducer

