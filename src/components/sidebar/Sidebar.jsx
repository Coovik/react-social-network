import { NavLink } from 'react-router-dom';
import c from './Sidebar.module.css'

function Sidebar() {
   return (
      <div className={c.sidebar}>
         <div className={c.list}>
            <div className={c.item}><NavLink to="profile" >Profile</NavLink></div>
            <div className={c.item}><NavLink to="dialogs">Dialogs</NavLink></div>
            <div className={c.item}><NavLink to="news">News</NavLink></div>
            <div className={c.item}><NavLink to="music">Music</NavLink></div>
            <div className={c.item}><NavLink to="settings">Settings</NavLink></div>
         </div>
      </div>
   );
}
export default Sidebar;
