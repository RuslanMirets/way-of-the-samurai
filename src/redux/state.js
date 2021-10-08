let state = {
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
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
}

export default state;