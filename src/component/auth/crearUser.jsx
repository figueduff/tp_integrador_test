import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase";

function crearUser() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // creacion de usuario en firebase
  const crearUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .cath((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      Crear Usuario
      <form onSubmit={crearUser}>
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
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default crearUser;
