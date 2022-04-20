import cSidebar from './Sidebar.module.css'

function Sidebar() {
   return (
      <div className={cSidebar.sidebar}>
         <ul>
            <li><a href="Profile">Profile</a></li>
            <li><a href="Dialogs">Dialogs</a></li>
            <li><a href="News">News</a></li>
            <li><a href="Music">Music</a></li>
            <li><a href="Settings">Settings</a></li>
         </ul>
      </div>
   );
}
export default Sidebar;
