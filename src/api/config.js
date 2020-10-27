import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

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

const db = firebase.firestore();
/* 
const getCollection = (collection) => {

    db.collection(collection).get().then((result) => {
        return result;
    });

};
 */
export {
    db,
}


