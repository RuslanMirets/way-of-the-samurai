import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: "Hi, how are you?", likesCount: 12},
  {id: 2, message: "It's my first post", likesCount: 2},
  {
    id: 3,
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt ea eos ipsam labore quasi quisquam quod repellat rerum voluptas? Eaque excepturi molestias mollitia nihil quaerat quia quibusdam repellendus sunt?",
    likesCount: 5
  },
]
let dialogs = [
  {id: 1, name: 'Ivan'},
  {id: 2, name: 'Petr'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
]
let messages = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'Hi'},
  {id: 3, message: 'How are you?'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
