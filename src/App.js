import cApp from "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import News from './components/content/news/News';
import Music from "./components/content/music/Music";
import Settings from './components/content/settings/Settings';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/content/dialogs/DialogsContainer";
import UsersContainer from "./components/content/users/UsersContainer";
import ProfileContainer from "./components/content/profile/ProfileContainer";

function App(props) {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Sidebar />
            <div className="app-content">
               <Routes>
                  <Route path="/profile/*" element={<ProfileContainer />} />
                  <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/users" element={<UsersContainer />} />
               </Routes>
            </div>
         </div >
      </BrowserRouter>
   )
}

export default App;
