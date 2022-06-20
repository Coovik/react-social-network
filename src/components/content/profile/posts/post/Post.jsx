import cPost from './Post.module.css'
import defaultPhoto from '../../../../../assets/img/user.png'


function Post(props) {
   return (
      <div className={cPost.post}>
         <div className={cPost.icon}>
            <img
               src={defaultPhoto}
               alt="" />
         </div>
         <div className={cPost.title}>
            {props.title}
         </div>
      </div>
   );
}
export default Post