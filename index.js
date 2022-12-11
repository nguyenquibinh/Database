// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDADSSzEbqzdlx0qQbmeV50o-2f-6lk34Q",
  authDomain: "examble-36998.firebaseapp.com",
  databaseURL: "https://examble-36998-default-rtdb.firebaseio.com",
  projectId: "examble-36998",
  storageBucket: "examble-36998.appspot.com",
  messagingSenderId: "173279564310",
  appId: "1:173279564310:web:10dde98f05e584a54c5b37",
  measurementId: "G-VF2XRRCQ2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

send.addEventListener('click',(e) =>{ 
Sends();
});
read.addEventListener('click',(e) =>{ 
Getval();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'Number/'), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
