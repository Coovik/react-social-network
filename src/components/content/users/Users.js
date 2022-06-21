import * as axios from 'axios'
import c from './Users.module.css'
import defaultPhoto from '../../../assets/img/user.png'
import React from "react"


class Users extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${this.props.currentPage}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
         })
   }
   onChangePage = pageNumber => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${pageNumber}`)
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }
   render = () => {
      let pages = []
      let total = Math.ceil(this.props.totalCount / this.props.usersOnPage / 100)
      for (let i = 1; i <= total; i++) {
         pages.push(i)
      }
      return <div>
         <div className={c.pages}>
            {pages.map(p => {
               return (
                  <span className={this.props.currentPage === p && c.selectedPage}
                     onClick={() => this.onChangePage(p)}> {p}</span>
               )
            })
            }
         </div>
         {
            this.props.users.map(u => {
               return (
                  <div key={u.id} className={c.block}  >
                     <div className={c.img}>
                        <img src={u.photos.small !== null ? u.photos.small : defaultPhoto} alt="avatar" />
                     </div>
                     {u.followed ?
                        <button onClick={() => this.props.unfollow(u.id)} >Unfollow</button> :
                        <button onClick={() => this.props.follow(u.id)} >Follow</button>
                     }
                     <div className={c.firstColumn}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                     </div>
                  </div >
               )
            })
         }
      </div >
   }
}
export default Users