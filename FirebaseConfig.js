
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbZGPeGgXb8hzUsIDq5WtJS-yynNWHlQQ",
  authDomain: "towntix-e03f2.firebaseapp.com",
  projectId: "towntix-e03f2",
  storageBucket: "towntix-e03f2.appspot.com",
  messagingSenderId: "812614049191",
  appId: "1:812614049191:web:55e4e810e7208e24af2a82",
  measurementId: "G-GJWMMTZ7GC"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);





// ID IOS: 1042550631797-1bsnh70anucl8vos5hcd6go26uc2meve.apps.googleusercontent.com
// ID Android: 1042550631797-qlt4uqke5516q8pmkdljq3rl21atr4l9.apps.googleusercontent.com
//github ID: 114a479b034ec8c4dca0 
//github keySecret: cc1e068bf441ec8de8226e50d464f00572f34f14
// Api google maps: AIzaSyADF4FSaCUU8m3uxh_pBkAYnBPQ7XWoKn0