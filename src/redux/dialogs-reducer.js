const ADD_MESSAGE = 'ADD_MESSAGE'

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
}

const dialogsReducer = (state = intialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         return {
            ...state,
            messages: [...state.messages, { id: 5, message: action.newMessageBody }],
         }
      default:
         return state
   }
}


export const addMessage = newMessageBody => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer