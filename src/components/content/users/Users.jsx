import c from './Users.module.css'
import defaultPhoto from '../../../assets/img/user.png'
import preloader from '../../../assets/img/preloader.gif'
import { NavLink } from "react-router-dom"
import { usersAPI } from '../../../api/api'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import { toggleIsFollowing } from "./../../../redux/users-reducer"

let Users = (props) => {
   let pages = []
   let total = Math.ceil(props.totalCount / props.usersOnPage / 100)
   for (let i = 1; i <= total; i++) {
      pages.push(i)
   }
   return <>
      <div className={c.preloader}>
         {props.isFetching &&
            <img src={preloader} />
         }
      </div >
      <div className={c.pages}>
         {pages.map(p => {
            return (
               <span className={props.currentPage === p ? c.selectedPage : null}
                  onClick={() => props.onChangePage(p)}>{p}</span>
            )
         })}
      </div>
      {
         props.users.map(u => {
            return (
               <div key={u.id} className={c.block}>
                  <NavLink to={'/profile/' + u.id}>
                     <div className={c.img}>
                        <img src={u.photos.small !== null ? u.photos.small : defaultPhoto} alt="avatar" />
                     </div>
                  </NavLink>
                  {
                     u.followed ?
                        <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                           props.toggleIsFollowing(true, u.id)
                           usersAPI.unfollow(u.id).then(resultCode => {
                              if (resultCode === 0) {
                                 props.unfollow(u.id)
                                 props.toggleIsFollowing(false, u.id)
                              }
                           })
                        }}>Unfollow</button> :
                        <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                           props.toggleIsFollowing(true, u.id)
                           usersAPI.follow(u.id).then(resultCode => {
                              if (resultCode === 0) {
                                 props.follow(u.id)
                                 props.toggleIsFollowing(false, u.id)
                              }
                           })
                        }}>Follow</button>
                  }
                  <div className={c.firstColumn}>
                     <div>{u.name}</div>
                     <div>{u.status}</div>
                  </div>
               </div >
            )
         })
      }
   </ >
}

export default Users