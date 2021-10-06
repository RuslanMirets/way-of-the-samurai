import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <nav>
        <ul>
          <li className={classes.item}>
            <a href="#">Profile</a>
          </li>
          <li className={`${classes.item} ${classes.active}`}>
            <a href="#">Messages</a>
          </li>
          <li className={classes.item}>
            <a href="#">News</a>
          </li>
          <li className={classes.item}>
            <a href="#">Music</a>
          </li>
          <li className={classes.item}>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;