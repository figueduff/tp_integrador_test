import { useEffect, useContext } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import BtEliminar from "./btEliminarDeLista";
import { ListaContext } from "./contextLista";

function miLista() {
  const [lista, setLista] = useContext(ListaContext);

  // trae lista

  useEffect(() => {
    const traerLista = () => {
      try {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const uid = user.uid;
            const docRef = doc(db, "usuarios", uid);
            const docu = await getDoc(docRef);
            try {
              let listaok = docu.data().lista;
              if (listaok) {
                setLista(listaok);
              }
            } catch (error) {
              console.log(error);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    traerLista();
  });

  return (
    <div>
      <h3>Mi lista</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {lista.map((item) => (
          <div key={item.id} className="card">
            <p>{item.email}</p>
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              data-id={item.id}
              //   onClick={verDetalle}
              alt={item.original_title}
            />
            <BtEliminar id={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default miLista;
