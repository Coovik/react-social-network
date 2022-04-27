import c from './Posts.module.css'
import Post from './post/Post';


function Posts() {
   return (
      <div className={c.posts}>
         <Post namePost="some post 2" />
         <Post namePost="some post 1" />
      </div>
   );
}
export default Posts