const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_DIALOG_TEXT = ' UPDATE_DIALOG_TEXT'


const dialogsReducer = (state, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let message = { id: 5, message: state.newText }
         state.messages.push(message)
         state.newText = ''
         return state
      case UPDATE_DIALOG_TEXT:
         state.newText = action.newMessage
         return state
      default:
         return state
   }
}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateDialogTextActionCreator = (text) => (
   { type: UPDATE_DIALOG_TEXT, newMessage: text }
)

export default dialogsReducer