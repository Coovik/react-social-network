import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let data = {
   postsName: [
      { name: 'some post 1' },
      { name: 'some post 2' },
      { name: 'some post 3' },
      { name: 'some post 4' }
   ],
   dialogs: [
      { id: '1', name: 'Oleg' },
      { id: '2', name: 'Danya' },
      { id: '3', name: 'Maksim' },
      { id: '4', name: 'Valera' },
   ],
   messages: [
      { id: '1', message: 'Hello!' },
      { id: '2', message: 'How are you?' },
      { id: '3', message: 'What do you do?' },
      { id: '4', message: 'Bye' },
   ]

};

root.render(
   <React.StrictMode>
      <App data={data} />
   </React.StrictMode>
);
reportWebVitals();
