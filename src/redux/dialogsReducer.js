const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Petr'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
  ],
  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How are you?'},
  ],
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 6, message: body});
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;