import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/state';
import App from './App';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderTree = (data) => {
   root.render(
      // <React.StrictMode>
      // </React.StrictMode >
      <App data={data} dispatch={store.dispatch.bind(store)} />
   );
}

renderTree(store.getData())
store.subscribe(renderTree)