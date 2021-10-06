import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://im0-tub-ru.yandex.net/i?id=5275620b9c69d4c19886fcea87348990&n=13&exp=1" alt="avatar"/>
      {props.message}
    </div>
  );
}

export default Post;
