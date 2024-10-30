// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCU1Pf0ywGsCxXvzeSV5mvOfnuVw0BF72A",
    authDomain: "hoya-01-6b5ad.firebaseapp.com",
    projectId: "hoya-01-6b5ad",
    storageBucket: "hoya-01-6b5ad.appspot.com",
    messagingSenderId: "241381083689",
    appId: "1:241381083689:web:244de5feaaec1619b62a38"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
