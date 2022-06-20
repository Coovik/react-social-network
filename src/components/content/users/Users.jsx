import * as axios from 'axios'
import c from './Users.module.css'
import defaultPhoto from '../../../assets/img/user.png'


let Users = (props) => {
   if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
         props.setUsers(response.data.items)
      })
   }
   return (
      props.users.map(u => {
         return (
            <div key={u.id} className={c.block}  >
               <div className={c.img}>
                  <img src={u.photos.small !== null ? u.photos.small : defaultPhoto} alt="avatar" />
               </div>
               {u.followed ?
                  <button onClick={() => props.unfollow(u.id)} >Unfollow</button> :
                  <button onClick={() => props.follow(u.id)} >Follow</button>
               }
               <div className={c.firstColumn}>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
               </div>
               <div className={c.secondColumn}>
                  {/* <div>{u.location.country}</div> */}
                  {/* <div>{u.location.city}</div> */}
               </div>
            </div >
         )
      })
   )
}
export default Users