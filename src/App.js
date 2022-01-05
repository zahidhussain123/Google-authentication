import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";

const App = () => {
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        const name = res.user.displayName;
        const email = res.user.email;
        const profilePhoto = res.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePhoto", profilePhoto);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="app">
      <h1>Sign In Google</h1>
      <button className="btn btn-success" onClick={signInWithGoogle}>Sign in</button>
      <div className="desc">
      <h1 className="name">{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePhoto")} alt="draw" />
      </div>
    </div>
  );
};

export default App;
