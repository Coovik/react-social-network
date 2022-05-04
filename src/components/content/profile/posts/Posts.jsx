import c from './Posts.module.css'
import Post from './post/Post';


function Posts(props) {
   let posts = props.postsName.map(title => <Post title={title.name} />)
   return (
      <div className={c.posts}>
         {posts}
      </div>
   );
}
export default Posts