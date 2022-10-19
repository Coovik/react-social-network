import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import News from './components/content/news/News'
import Music from './components/content/music/Music'
import Settings from './components/content/settings/Settings'
import { HashRouter, Route, Routes, } from 'react-router-dom'
import ProfileContainer from './components/content/profile/ProfileContainer'
import HeaderContainer from './components/header/HeaderContainer'
import Login from './components/login/Login'
import React, { Suspense } from 'react'
import { Preloader } from './components/common/preloader/Preloader'

const DialogsContainer = React.lazy(() => import('./components/content/dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/content/users/UsersContainer'))

const App = () => {
   return (
      <HashRouter>
         <div className='app-wrapper'>
            <HeaderContainer />
            <Sidebar />
            <div className='app-content'>
               <Suspense fallback={<Preloader />}  >
                  <Routes>
                     <Route path='/dialogs/*' element={<DialogsContainer />} />
                     <Route path='/users' element={<UsersContainer />} />
                     <Route path='/profile/:id' element={<ProfileContainer />} />
                     <Route path='/profile' element={<ProfileContainer />} />
                     <Route path='/login' element={<Login />} />
                     <Route path='/news' element={<News />} />
                     <Route path='/music' element={<Music />} />
                     <Route path='/settings' element={<Settings />} />
                  </Routes>
               </Suspense>
            </div>
         </div >
      </HashRouter>
   )
}


export default App