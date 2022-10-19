import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
})
type ReducerType = typeof rootReducer
export type AppStateType = ReturnType<ReducerType>
export type InferType<T> = T extends { [key: string]: infer U } ? U : never


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

