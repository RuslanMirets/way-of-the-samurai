import classes from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + ' ' + classes.active}>
          Ivan
        </div>
        <div className={classes.dialog}>
          Petr
        </div>
        <div className={classes.dialog}>
          Sveta
        </div>
        <div className={classes.dialog}>
          Sasha
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How are you?</div>
        <div className={classes.message}>Ha ha</div>
      </div>
    </div>
  );
}

export default Dialogs;