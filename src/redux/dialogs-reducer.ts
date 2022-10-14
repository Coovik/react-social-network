const ADD_MESSAGE = 'dialogs-reducer/ADD_MESSAGE'

type DialogType = {
   id: number
   name: string
}
type MessageType = {
   id: number
   message: string
}
type InitialStateType = {
   dialogs: DialogType[]
   messages: MessageType[]
}
let intialState: InitialStateType = {
   dialogs: [
      { id: 1, name: 'Oleg' },
      { id: 2, name: 'Danya' },
      { id: 3, name: 'Maksim' },
      { id: 4, name: 'Valera' },
   ],
   messages: [
      { id: 1, message: 'Hello!' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'What do you do?' },
      { id: 4, message: 'Bye' },
   ],
}
const dialogsReducer = (state = intialState, action): InitialStateType => {
   switch (action.type) {
      case ADD_MESSAGE:
         return {
            ...state,
            messages: [...state.messages,
            { id: state.messages.length + 1, message: action.newMessageBody }],
         }
      default:
         return state
   }
}

// actionCreators
type AddMessageActionType = {
   type: typeof ADD_MESSAGE
   newMessageBody: string
}
export const addMessage = (newMessageBody: string): AddMessageActionType => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer