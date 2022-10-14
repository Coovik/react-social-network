import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { authAPI } from '../api/api'
import { AppStateType } from './redux-store'

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA'

type InitialStateType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean
}
let initialState: InitialStateType = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
}

type ActionsTypes = SetAuthUserDataActionType

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
type SetAuthUserDataActionType = {
   type: typeof SET_USER_DATA
   payload: {
      id: number | null
      email: string | null
      login: string | null
      isAuth: boolean
   }
}
export const setAuthUserData = (
   id: number | null,
   email: string | null,
   login: string | null,
   isAuth: boolean,
): SetAuthUserDataActionType => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })

// thunks
// type GetAuthUserDataDispatchType = (ac: SetAuthUserDataActionType) => void
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const getAuthUserData = (): ThunkActionType => async (dispatch, getState) => {
   const data = await authAPI.me()
   if (data.resultCode === 0) {
      let { id, login, email } = data.data
      dispatch(setAuthUserData(id, email, login, true))
   }
}
export const login = (email, password, rememberMe): ThunkActionType => async (dispatch, getState) => {
   const response = await authAPI.login(email, password, rememberMe)
   if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
   } else {
      // dispatch(stopSubmit('login', { _error: response.data.messages[0] }))
   }
}
export const logout = (): ThunkActionType => async (dispatch, getState) => {
   const response = await authAPI.logout()
   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
}

export default authReducer
