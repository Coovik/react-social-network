import { NavLink } from 'react-router-dom';
import cSidebar from './Sidebar.module.css'

function Sidebar() {
   return (
      <div className={cSidebar.sidebar}>
         <ul>
            <li><NavLink to="profile">Profile</NavLink></li>
            <li><NavLink to="dialogs">Dialogs</NavLink></li>
            <li><NavLink to="news">News</NavLink></li>
            <li><NavLink to="music">Music</NavLink></li>
            <li><NavLink to="settings">Settings</NavLink></li>
         </ul>
      </div>
   );
}
export default Sidebar;
