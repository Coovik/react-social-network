import cPost from './Post.module.css'

function Post(props) {
   return (
      <div className={cPost.post}>
         {props.namePost}
      </div>
   );
}
export default Post