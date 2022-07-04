import c from './Profile.module.css'
import PostsContainer from './posts/PostsContainer';
import defaultPhoto from '../../../assets/img/user.png'
import Status from "./status/Status"
import { Preloader } from '../../common/preloader/Preloader';

function Profile(props) {
   if (!props.profile) return <Preloader />

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
               <Status status={props.status} updateStatus={props.updateStatus} />
            </div>
         </div>
         <PostsContainer />
      </div>
   );
}
export default Profile