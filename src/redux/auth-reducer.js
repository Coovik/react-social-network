import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let intialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
}

const authReducer = (state = intialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state, ...action.payload,
         }
      default:
         return state
   }
}

// actionCreators
export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })

// thunks
export const getAuthUserData = () => dispatch => {
   authAPI.me().then(data => {
      if (data.resultCode === 0) {
         let { id, login, email } = data.data
         dispatch(setAuthUserData(id, email, login, true))
      }
   })
}
export const login = (email, password, rememberMe) => dispatch => {
   authAPI.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) {
         dispatch(getAuthUserData())
      } else {
         dispatch(stopSubmit('login', { _error: response.data.messages[0] }))
      }
   })
}
export const logout = () => dispatch => {
   authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false))
      }
   })
}


export default authReducer