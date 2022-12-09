import Login from "./component/auth/login";
import CrearUser from "./component/auth/crearUser";
import User from "./component/auth/user";
import MasVistas from "./component/peliculas/masvistas";
import MiLista from "./component/peliculas/miLista";

function App() {

  return (
    <div className="App">
      <CrearUser />
      <br />
      <Login />
      <br />
      <User />
      <br />
      <MiLista/>
      <br />
      <MasVistas/>
    </div>
  );
}

export default App;
