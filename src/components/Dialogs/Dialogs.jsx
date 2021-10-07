import classes from './Dialogs.module.css';
import {Link} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={classes.dialog}>
      <Link to={path}>
        {props.name}
      </Link>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={classes.dialog}>{props.message}</div>
  );
}

const Dialogs = () => {
  let dialogsData = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Petr'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
  ]

  let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How are you?'},
  ]

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>
      </div>
    </div>
  );
}

export default Dialogs;