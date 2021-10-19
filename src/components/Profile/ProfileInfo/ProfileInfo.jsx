import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={classes.profileBanner}>
        <img src="https://w-dog.ru/wallpapers/13/14/465473241668895/derevo-listya-priroda-vetvi.jpg" alt="main"/>
      </div>
      <div className={classes.descriptionBlock}>
        <div className={classes.fullName}>{props.profile.fullName}</div>
        <img className={classes.avatar} src={props.profile.photos.large} alt="Avatar"/>
      </div>
    </div>
  );
}

export default ProfileInfo;