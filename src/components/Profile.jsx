import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.profileBanner}>
        <img src="https://w-dog.ru/wallpapers/13/14/465473241668895/derevo-listya-priroda-vetvi.jpg" alt="main"/>
      </div>
      <div>
        ava + desc
      </div>
      <div>
        my posts
        <div>
          new post
        </div>
        <div>
          <div className={classes.item}>
            post 1
          </div>
          <div className={classes.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;