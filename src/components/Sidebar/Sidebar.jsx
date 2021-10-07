import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <nav>
        <ul>
          <li className={classes.item}>
            <a href="/profile">Profile</a>
          </li>
          <li className={`${classes.item} ${classes.active}`}>
            <a href="/dialogs">Messages</a>
          </li>
          <li className={classes.item}>
            <a href="/news">News</a>
          </li>
          <li className={classes.item}>
            <a href="/music">Music</a>
          </li>
          <li className={classes.item}>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;