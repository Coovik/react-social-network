import cHeader from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header() {
   return (
      <div className={cHeader.header}>
         <div className={cHeader.logo}>
            <NavLink to="/">
               <img src="https://cdn-icons-png.flaticon.com/512/7269/7269877.png" alt="logo" />
            </NavLink>
         </div>
      </div>
   )
}
export default Header