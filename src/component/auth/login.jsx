import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import Swal from "sweetalert2";

function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // login con usuario en firebase
  const loginEmail = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.log(error);
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        Swal.fire("El email y/o password es incorrecto");
      } else {
        Swal.fire("Un error a ocurrido");
      }
    }
  };

  // login con google firebase
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log(userCredential);
      const docRef = doc(db, "usuarios", auth.currentUser.uid);
      const data = {
        uid: auth.currentUser.uid,
        authProvider: "google",
        email: auth.currentUser.email,
      };
      await setDoc(docRef, data);
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
          required
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          placeholder="Ingrese password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <br />
      <button type="button" onClick={loginGoogle}>
        Login Google
      </button>
    </div>
  );
}

export default login;
