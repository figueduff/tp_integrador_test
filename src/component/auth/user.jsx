import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";

// estado del usuario
function user() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const logueado = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) : setAuthUser(null);
    });
    return () => {
      logueado();
    };
  }, []);

  const desloguear = () => {
    signOut(auth)
      .then(() => {
        console.log("deslogueado ok");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`logueado ${authUser.email}`}</p>
          <button onClick={desloguear}>Log Out</button>
        </>
      ) : (
        <p>Deslogueado</p>
      )}
    </div>
  );
}

export default user;