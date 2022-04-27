import Posts from './posts/Posts';
import c from './Profile.module.css'

function Profile() {
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
                  src="https://cdn-icons-png.flaticon.com/512/747/747545.png"
                  alt=""
               />
            </div>
            <div className={c.discription}>
               <div className={c.name}>Ivan</div>
               <div className={c.birthdate}>10.2001</div>
               <div className={c.city}>Moscow</div>
            </div>
         </div>
         <Posts />
      </div>
   );
}
export default Profile