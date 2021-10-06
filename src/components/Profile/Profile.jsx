import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.profileBanner}>
        <img src="https://w-dog.ru/wallpapers/13/14/465473241668895/derevo-listya-priroda-vetvi.jpg" alt="main"/>
      </div>
      <div>
        ava + desc
      </div>
      <MyPosts/>
    </div>
  );
}

export default Profile;