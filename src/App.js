import MainPage from "./static/js/MainPage";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDzKuf7u9bxNEco-MCK7Tnrweo3bYSqfXY",
    authDomain: "gamblinflanagan-dc7f7.firebaseapp.com",
    projectId: "gamblinflanagan-dc7f7",
    storageBucket: "gamblinflanagan-dc7f7.appspot.com",
    messagingSenderId: "298647060421",
    appId: "1:298647060421:web:a7533d5ab4622d479655ac",
    measurementId: "G-KWRCYZJRQ9"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  return (
    <MainPage />
  );
}

export default App;
