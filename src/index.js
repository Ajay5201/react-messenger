import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxWvZMIu2PGnkN6sZUIZpM1j-M0BTvQ3Q",
  authDomain: "react-blog-ac333.firebaseapp.com",
  databaseURL: "https://react-blog-ac333.firebaseio.com",
  projectId: "react-blog-ac333",
  storageBucket: "react-blog-ac333.appspot.com",
  messagingSenderId: "257793304669",
  appId: "1:257793304669:web:a6dead157d09c5ffb4c5b4"
};


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
