import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
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

  let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  let messagesElements = messages.map(message => <Message message={message.message}/>);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;