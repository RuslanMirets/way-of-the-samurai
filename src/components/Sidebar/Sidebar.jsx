import classes from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <nav>
        <ul>
          <li className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
          </li> <li className={classes.item}>
            <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;