import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";
import "firebase/analytics";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const firebaseConfig = {
  apiKey: "AIzaSyAHUOI_o-k1TNiHbeeqXd3lYjC9sWwD394",
  authDomain: "dfhrecords-website.firebaseapp.com",
  databaseURL: "https://dfhrecords-website.firebaseio.com",
  projectId: "dfhrecords-website",
  storageBucket: "dfhrecords-website.appspot.com",
  messagingSenderId: "115947693363",
  appId: "1:115947693363:web:4069dc54a05548c98d4a46",
  measurementId: "G-V1RR19KSY3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
