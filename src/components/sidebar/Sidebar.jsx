import cSidebar from './Sidebar.module.css'

function Sidebar() {
   return (
      <div className={cSidebar.sidebar}>
         <ul>
            <li>Profile</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <li>Settings</li>
         </ul>
      </div>
   );
}
export default Sidebar;
