import { InferType } from "./redux-store"

let intialState = {
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
type InitialState = typeof intialState
const dialogsReducer = (state = intialState, action: Actions): InitialState => {
   switch (action.type) {
      case "DIALOGS-REDUCER/ADD_MESSAGE":
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
const actions = {
   addMessage: (newMessageBody: string) => (
      { type: 'DIALOGS-REDUCER/ADD_MESSAGE', newMessageBody } as const),
}
type Actions = ReturnType<InferType<typeof actions>>

export default dialogsReducer