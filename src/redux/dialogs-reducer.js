const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_DIALOG_TEXT = ' UPDATE_DIALOG_TEXT'

let intialState = {
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
}

const dialogsReducer = (state = intialState, action) => {
   switch (action.type) {
      case UPDATE_DIALOG_TEXT:
         return {
            ...state,
            newText: action.newMessage,
         }
      case ADD_MESSAGE:
         return {
            ...state,
            messages: [...state.messages, { id: 5, message: state.newText }],
            newText: '',
         }
      default:
         return state
   }
}


export const updateDialogText = (text) => (
   { type: UPDATE_DIALOG_TEXT, newMessage: text }
)
export const addMessage = () => ({ type: ADD_MESSAGE })

export default dialogsReducer