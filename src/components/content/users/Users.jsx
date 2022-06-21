import c from './Users.module.css'
import defaultPhoto from '../../../assets/img/user.png'
import preloader from '../../../assets/img/preloader.gif'

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
               <span className={props.currentPage === p && c.selectedPage}
                  onClick={() => props.onChangePage(p)}>{p}</span>
            )
         })}
      </div>
      {
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
               </div >
            )
         })
      }
   </ >
}

export default Users