import cApp from "./App.css";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Sidebar />
            <div className="app-content">
               <Routes>
                  <Route path="/Profile" element={<Profile />} />
                  <Route path="/Dialogs" element={<Dialogs />} />
               </Routes>
            </div>
         </div >
      </BrowserRouter>
   );
}

export default App;
