import c from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header(props) {
   return (
      <div className={c.header}>
         <div className={c.logo}>
            <NavLink to="/profile">
               <img src="https://cdn-icons-png.flaticon.com/512/7269/7269877.png" alt="logo" />
            </NavLink>
         </div>
         <div className={c.login}>
            {props.isAuth ?
               <div>{props.login}</div> :
               <NavLink to='/auth'>Login</NavLink>
            }
         </div>
      </div>
   )
}
export default Header