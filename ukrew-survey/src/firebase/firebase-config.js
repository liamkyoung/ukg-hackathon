import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyASPUEurYWgYuCpdtgD5yxFPAS2vEWzLVQ",
  authDomain: "ukrew-mingle.firebaseapp.com",
  projectId: "ukrew-mingle",
  storageBucket: "ukrew-mingle.appspot.com",
  messagingSenderId: "296598405120",
  appId: "1:296598405120:web:3b0442bcd6094c2bfcd8e5",
  measurementId: "G-ML3XT45WSQ"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
