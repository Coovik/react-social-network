import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import data from './redux/state';
import { addPost } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderTree = (data) => {
   root.render(
      // <React.StrictMode>
      // </React.StrictMode >
      < App data={data} addPost={addPost} />
   );
}
// reportWebVitals();
