import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderTree = () => {
   root.render(
      // <React.StrictMode>
      // </React.StrictMode >
      <Provider store={store}>
         <App />
      </Provider>
   );
}

renderTree()
store.subscribe(() => {
   renderTree()
})