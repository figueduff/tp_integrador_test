import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import Swal from "sweetalert2";

// estado del usuario
function user() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const logueado = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      logueado();
    };
  }, []);

  const desloguear = async () => {
    try {
      await signOut(auth);
      console.log("deslogueado ok");
    } catch (error) {
      alert(error.message);
    }
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
