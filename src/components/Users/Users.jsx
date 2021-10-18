import React from "react";
import axios from "axios";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/avatar.jpg";

class Users extends React.Component {

  constructor(props) {
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      this.props.setUsers(response.data.items)
    });
  }

  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <div key={user.id}>
          <span>
            <div>
              <img className={classes.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}
                   alt="Avatar"/>
            </div>
            <div>
              {user.followed ? <button onClick={() => {
                this.props.unfollow(user.id)
              }}>Unfollow</button> : <button onClick={() => {
                this.props.follow(user.id)
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
}

export default Users;