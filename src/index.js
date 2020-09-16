import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyDP34H_0ImXyV15oAZ0BTl3YlomrF0Zp4c",
    authDomain: "truthdare-1a4dd.firebaseapp.com",
    databaseURL: "https://truthdare-1a4dd.firebaseio.com",
    projectId: "truthdare-1a4dd",
    storageBucket: "truthdare-1a4dd.appspot.com",
    messagingSenderId: "856541074510",
    appId: "1:856541074510:web:906c067689dfd5bd3adf1f",
    measurementId: "G-E2E9L571ZB"
};
firebase.initializeApp(config);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
