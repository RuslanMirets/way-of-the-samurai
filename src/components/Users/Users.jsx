import classes from "./Users.module.css";
import userPhoto from "../../assets/images/avatar.jpg";
import {Link} from "react-router-dom";

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={classes.pagination}>
        {pages.map(page => {
          return (
            <span className={`${classes.page} ${props.currentPage === page && classes.currentPage}`} onClick={() => {
              props.onPageChanged(page)
            }}>
              {page}
            </span>)
        })}
      </div>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <Link to={'/profile/' + user.id}>
                <img className={classes.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}
                     alt="Avatar"/>
              </Link>
            </div>
            <div>
              {user.followed ? <button onClick={() => {
                props.unfollow(user.id)
              }}>Unfollow</button> : <button onClick={() => {
                props.follow(user.id)
              }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;