import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";


function login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // login con usuario en firebase
  const loginEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => alert(error.message));
  };

  // login con google firebase
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log(provider);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      login
      <form onSubmit={loginEmail}>
        <label htmlFor="email"></label>
        <input
          type="text"
          placeholder="Ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          placeholder="Ingrese password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button type="button" onClick={loginGoogle}>
        Login Google
      </button>
    </div>
  );
}

export default login;
