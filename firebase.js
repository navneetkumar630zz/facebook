import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCrQ1C0ArP_WJufgWtGO06zSrPMib6o_Cg',
	authDomain: 'facebook-navneet.firebaseapp.com',
	projectId: 'facebook-navneet',
	storageBucket: 'facebook-navneet.appspot.com',
	messagingSenderId: '985612837395',
	appId: '1:985612837395:web:21286153c2f3233b3a15e6',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const db = app.firestore();

export const storage = firebase.storage();
