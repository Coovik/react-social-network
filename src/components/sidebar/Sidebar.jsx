import { NavLink } from 'react-router-dom';
import c from './Sidebar.module.css'

function Sidebar() {
   return (
      <div className={c.sidebar}>
         <div className={c.list}>
            <div className={c.item}><NavLink className={(navData) => navData.isActive ? c.active : ""} to="profile" >Profile</NavLink></div>
            <div className={c.item}><NavLink className={(navData) => navData.isActive ? c.active : ""} to="dialogs" >Dialogs</NavLink></div>
            <div className={c.item}><NavLink className={(navData) => navData.isActive ? c.active : ""} to="news">News</NavLink></div>
            <div className={c.item}><NavLink className={(navData) => navData.isActive ? c.active : ""} to="music">Music</NavLink></div>
            <div className={c.item}><NavLink className={(navData) => navData.isActive ? c.active : ""} to="settings">Settings</NavLink></div>
            <div className={c.item}><NavLink className={(navData) => navData.isActive ? c.active : ""} to="users">Users</NavLink></div>
         </div>
      </div>
   );
}
export default Sidebar;
