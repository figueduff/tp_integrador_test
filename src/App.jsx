import Login from "./component/auth/login";
import CrearUser from "./component/auth/crearUser";
import User from "./component/auth/user";
import MasVistas from "./component/peliculas/masvistas";
import MiLista from "./component/peliculas/miLista";
import MiLista2 from "./component/peliculas/miLista2";
import ListaContextProvider from "./component/peliculas/contextLista";

function App() {
  return (
    <div className="App">
      <CrearUser />
      <br />
      <Login />
      <br />
      <User />
      <br />
      {/* <MiLista/>
      <br /> */}
      <ListaContextProvider>
        <MiLista2 />
      </ListaContextProvider>
      <br />
      <MasVistas />
    </div>
  );
}

export default App;
