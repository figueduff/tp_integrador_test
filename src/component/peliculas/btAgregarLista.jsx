import React from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../../firebase";
import Swal from "sweetalert2";

// para que funciones siempre tiene que recibir los parametros id y poster_path

function btAgregarLista(data) {
  // agregar a lista en firebase
  const agregarLista = async () => {
    let id = data.id;
    let poster_path = data.poster_path;
    // console.log("lista:", id, poster_path);
    if (auth.currentUser) {
      let uid = auth.currentUser.uid;
      console.log(uid);
      const docRef = doc(db, "usuarios", uid);
      await updateDoc(docRef, {
        lista: arrayUnion({
          id,
          poster_path,
        }),
      });
    } else {
      Swal.fire("Por favor loguear para guardar");
    }
  };

  return (
    <>
      <button type="button" onClick={agregarLista}>
        + lista
      </button>
    </>
  );
}

export default btAgregarLista;
