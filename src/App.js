import cApp from "./App.css";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
   return (
      <div className='app-wrapper'>
         <Header />
         <Sidebar />
         <div className="app-content">
            <Profile />
            {/* <Dialogs /> */}
         </div>
      </div >
   );
}

export default App;
