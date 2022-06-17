const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let intialState = {
   postsName: [
      { name: 'some post 1' },
      { name: 'some post 2' },
      { name: 'some post 3' },
      { name: 'some post 4' },
   ],
   newPostText: '',
}

const profileReducer = (state = intialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let post = { name: state.newPostText }
         state.postsName.push(post)
         state.newPostText = ''
         return state
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText
         return state
      default:
         return state
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => (
   { type: UPDATE_NEW_POST_TEXT, newText: text }
)

export default profileReducer