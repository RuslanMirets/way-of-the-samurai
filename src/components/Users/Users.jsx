import classes from "./Users.module.css";

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "https://avatars.mds.yandex.net/i?id=b61ae309ac765194b3db6cc1f508a868-4507914-images-thumbs&n=13&exp=1",
        followed: true,
        fullName: "Andrey",
        status: "I am solder",
        location: {city: "Prohladniy", country: "Russia"}
      },
      {
        id: 2,
        photoUrl: "https://avatars.mds.yandex.net/i?id=b61ae309ac765194b3db6cc1f508a868-4507914-images-thumbs&n=13&exp=1",
        followed: false,
        fullName: "Sasha",
        status: "Free man",
        location: {city: "Minsk", country: "Belarus"}
      },
      {
        id: 3,
        photoUrl: "https://avatars.mds.yandex.net/i?id=b61ae309ac765194b3db6cc1f508a868-4507914-images-thumbs&n=13&exp=1",
        followed: false,
        fullName: "Sveta",
        status: "So pretty",
        location: {city: "Kiev", country: "Ukraine"}
      },
    ])
  }

  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <img className={classes.userPhoto} src={user.photoUrl} alt="Avatar"/>
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
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;