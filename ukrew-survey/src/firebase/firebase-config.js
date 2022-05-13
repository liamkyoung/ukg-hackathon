import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCCFhrc1gieHtK5Fagk9Nny4vtcPLuPyF4',
//   authDomain: 'fire-testing-98b0b.firebaseapp.com',
//   projectId: 'fire-testing-98b0b',
//   storageBucket: 'fire-testing-98b0b.appspot.com',
//   messagingSenderId: '583012326436',
//   appId: '1:583012326436:web:22c98bd3f5dd1e0a7bccb1',
//   measurementId: 'G-JEZJW979S6',
// };

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
