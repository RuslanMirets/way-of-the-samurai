import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 2},
    {
      id: 3,
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt ea eos ipsam labore quasi quisquam quod repellat rerum voluptas? Eaque excepturi molestias mollitia nihil quaerat quia quibusdam repellendus sunt?",
      likesCount: 5
    },
  ]

  let postsElements = posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount}/>);

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