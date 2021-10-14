import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 2},
        {
          id: 3,
          message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt ea eos ipsam labore quasi quisquam quod repellat rerum voluptas? Eaque excepturi molestias mollitia nihil quaerat quia quibusdam repellendus sunt?",
          likesCount: 5
        },
      ],
      newPostText: 'react',
    },
    dialogsPage: {
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
      newMessageBody: ""
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;