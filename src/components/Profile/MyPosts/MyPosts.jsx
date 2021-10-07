import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount}/>);
  return (
    <div className={classes.postsBlock}>
      <h3 className={classes.title}>My posts</h3>
      <div className={classes.addPost}>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;