import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAqcgXIBUl_Agr9ZZj78VUPrF4Tx9aBxdc",
  authDomain: "travel-blog-aa446.firebaseapp.com",
  projectId: "travel-blog-aa446",
  storageBucket: "travel-blog-aa446.firebasestorage.app",
  messagingSenderId: "676648221700",
  appId: "1:676648221700:web:aadab59d990706bd270951",
  measurementId: "G-JP3TRHJE2N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);