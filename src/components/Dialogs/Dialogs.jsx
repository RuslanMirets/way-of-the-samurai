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
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Ivan" id="1"/>
        <DialogItem name="Sveta" id="2"/>
        <DialogItem name="Petr" id="3"/>
        <DialogItem name="Sasha" id="4"/>
      </div>
      <div className={classes.messages}>
        <Message message="Hello"/>
        <Message message="Hi"/>
        <Message message="How are you?"/>
      </div>
    </div>
  );
}

export default Dialogs;