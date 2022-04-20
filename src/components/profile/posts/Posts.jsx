import cPosts from './Posts.module.css'
import Post from './post/Post';


function Posts() {
   return (
      <div className={cPosts.posts}>
         <Post namePost="some post 2" />
         <Post namePost="some post 1" />
      </div>
   );
}
export default Posts