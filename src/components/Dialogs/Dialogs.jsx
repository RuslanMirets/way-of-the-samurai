import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/1" activeClassName={classes.active}>
            Ivan
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/2" activeClassName={classes.active}>
            Petr
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/3" activeClassName={classes.active}>
            Sveta
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/4" activeClassName={classes.active}>
            Sasha
          </NavLink>
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