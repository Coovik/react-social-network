import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data, { addPost, subscribe, updateNewPostText } from './redux/state';
import App from './App';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderTree = (data) => {
   root.render(
      // <React.StrictMode>
      // </React.StrictMode >
      < App data={data} addPost={addPost} updateNewPostText={updateNewPostText} />
   );
}

renderTree(data)
subscribe(renderTree)