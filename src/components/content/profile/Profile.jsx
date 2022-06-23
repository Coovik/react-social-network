import c from './Profile.module.css'
import PostsContainer from './posts/PostsContainer';
import defaultPhoto from '../../../assets/img/user.png'
import preloader from '../../../assets/img/preloader.gif'

function Profile(props) {
   if (!props.profile) return <img src={preloader} />

   return (
      <div className={c.profile}>
         <div className={c.block}>
            <div className={c.background}>
               <img
                  src="https://bcentral.com.ar/img/background-img/bg-img-2.jpg"
                  alt=""
               />
            </div>
            <div className={c.icon}>
               <img
                  src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto}
                  alt=""
               />
            </div>
            <div className={c.discription}>
               <div className={c.name}>{props.profile.fullName}</div>
            </div>
         </div>
         <PostsContainer />
      </div>
   );
}
export default Profile