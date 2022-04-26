import Posts from './posts/Posts';
import cProfile from './Profile.module.css'

function Profile() {
   return (
      <div className={cProfile.profile}>
         <div className={cProfile.background}>
            <img
               src="https://bcentral.com.ar/img/background-img/bg-img-2.jpg"
               alt=""
            />
         </div>
         <div className={cProfile.icon}>
            <img
               src="https://cdn-icons-png.flaticon.com/512/747/747545.png"
               alt=""
            />
         </div>
         <div className={cProfile.discription}>
            <div className={cProfile.name}>Ivan</div>
            <div className={cProfile.birthdate}>10.2001</div>
            <div className={cProfile.city}>Moscow</div>
         </div>
         <Posts />
      </div>
   );
}
export default Profile