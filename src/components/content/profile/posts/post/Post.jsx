import cPost from './Post.module.css'

function Post(props) {
   return (
      <div className={cPost.post}>
         <div className={cPost.icon}>
            <img
               src="https://cdn-icons-png.flaticon.com/512/747/747545.png"
               alt="" />
         </div>
         <div className={cPost.title}>
            {props.title}
         </div>
      </div>
   );
}
export default Post