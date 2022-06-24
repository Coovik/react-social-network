import { headerAPI } from "../api/api"

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
            ...state, ...action.data, isAuth: true,
         }
      default:
         return state
   }
}

// actionCreators
export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })

// thunks
export const getLogin = () => {
   return dispatch => {
      headerAPI.auth().then(data => {
         if (data.resultCode === 0) {
            let { id, login, email } = data.data
            dispatch(setAuthUserData(id, email, login))
         }
      })
   }
}

export default authReducer