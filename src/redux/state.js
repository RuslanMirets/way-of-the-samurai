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
    },
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;
window.store = store;