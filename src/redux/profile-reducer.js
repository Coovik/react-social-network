const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let intialState = {
   postsName: [
      { name: 'some post 1' },
      { name: 'some post 2' },
      { name: 'some post 3' },
      { name: 'some post 4' },
   ],
   newPostText: '',
   profile: null,
}

const profileReducer = (state = intialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText
         }
      case ADD_POST:
         return {
            ...state,
            postsName: [...state.postsName, { name: state.newPostText }],
            newPostText: '',
         }
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile }
      default:
         return state
   }
}

export const updateNewPostTextActionCreator = (text) => (
   { type: UPDATE_NEW_POST_TEXT, newText: text }
)
export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })

export default profileReducer