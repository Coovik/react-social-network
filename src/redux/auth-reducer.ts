import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { authAPI } from '../api/api'
import { AppStateType, InferType } from './redux-store'


let initialState = {
   id: +'',
   email: '',
   login: '',
   isAuth: false,
}
type InitialState = typeof initialState


const authReducer = (state = initialState, action: Actions): InitialState => {
   switch (action.type) {
      case 'AUTH-REDUCER/SET_USER_DATA':
         return {
            ...state, ...action.payload,
         }
      default:
         return state
   }
}

// actionCreators
const actions = {
   setAuthUserData: (id: number, email: string, login: string, isAuth: boolean,) => (
      { type: 'AUTH-REDUCER/SET_USER_DATA', payload: { id, email, login, isAuth } } as const),
}
type Actions = ReturnType<InferType<typeof actions>>

// thunks
type Thunk = ThunkAction<Promise<void>, AppStateType, unknown, Actions>
export const getAuthUserData = (): Thunk => async dispatch => {
   const data = await authAPI.me()
   if (data.resultCode === 0) {
      let { id, login, email } = data.data
      dispatch(actions.setAuthUserData(id, email, login, true))
   }
}
export const login = (email: string, password: string, rememberMe: boolean): Thunk => async dispatch => {
   const response = await authAPI.login(email, password, rememberMe)
   if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
   } else {
      // dispatch(stopSubmit('login', { _error: response.data.messages[0] }))
   }
}
export const logout = (): Thunk => async dispatch => {
   const response = await authAPI.logout()
   if (response.data.resultCode === 0) {
      dispatch(actions.setAuthUserData(null, null, null, false))
   }
}

export default authReducer
