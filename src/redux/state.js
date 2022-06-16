import profileReducer from "./profile-reducer"
import dialogsReducer from './dialogs-reducer';
import { renderTree } from './../index';


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
         newText: '',
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
      profileReducer(this._data.profilePage, action)
      dialogsReducer(this._data.dialogsPage, action)
      this.renderTree(this._data)
   }

}


export default store