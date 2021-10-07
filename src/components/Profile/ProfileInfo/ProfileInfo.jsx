import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.profileBanner}>
        <img src="https://w-dog.ru/wallpapers/13/14/465473241668895/derevo-listya-priroda-vetvi.jpg" alt="main"/>
      </div>
      <div className={classes.descriptionBlock}>
        ava + desc
      </div>
    </div>
  );
}

export default ProfileInfo;