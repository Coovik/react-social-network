import cApp from "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/content/profile/Profile";
import Dialogs from "./components/content/dialogs/Dialogs";
import News from './components/content/news/News';
import Music from "./components/content/music/Music";
import Settings from './components/content/settings/Settings';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Sidebar />
            <div className="app-content">
               <Routes>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/dialogs" element={<Dialogs />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
               </Routes>
            </div>
         </div >
      </BrowserRouter>
   );
}

export default App;
