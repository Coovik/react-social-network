import c from './Profile.module.css'
import PostsContainer from './posts/PostsContainer';
import defaultPhoto from '../../../assets/img/user.png'


function Profile(props) {
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
                  src={defaultPhoto}
                  alt=""
               />
            </div>
            <div className={c.discription}>
               <div className={c.name}>Ivan</div>
               <div className={c.birthdate}>10.2001</div>
               <div className={c.city}>Moscow</div>
            </div>
         </div>
         <PostsContainer />
      </div>
   );
}
export default Profile