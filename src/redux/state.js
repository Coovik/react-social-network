const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
   _data: {
      profilePage: {
         postsName: [
            { name: 'some post 1' },
            { name: 'some post 2' },
            { name: 'some post 3' },
            { name: 'some post 4' },
         ],
         newPostText: '',
      },
      dialogsPage: {
         dialogs: [
            { id: '1', name: 'Oleg' },
            { id: '2', name: 'Danya' },
            { id: '3', name: 'Maksim' },
            { id: '4', name: 'Valera' },
         ],
         messages: [
            { id: '1', message: 'Hello!' },
            { id: '2', message: 'How are you?' },
            { id: '3', message: 'What do you do?' },
            { id: '4', message: 'Bye' },
         ],
      },
   },

   getData() {
      return this._data
   },
   renderTree() { },
   subscribe(observer) {
      this.renderTree = observer
   },


   dispatch(action) {
      if (action.type === ADD_POST) {
         let post = { name: this._data.profilePage.newPostText }
         this._data.profilePage.postsName.push(post)
         this._data.profilePage.newPostText = ''
         this.renderTree(this._data)
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._data.profilePage.newPostText = action.newText
         this.renderTree(this._data)
      }
   }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => (
   { type: UPDATE_NEW_POST_TEXT, newText: text }
)

export default store