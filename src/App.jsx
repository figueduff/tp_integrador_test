import Login from "./component/auth/login";
import CrearUser from "./component/auth/crearUser";
import User from "./component/auth/user";
import MasVistas from "./component/peliculas/masvistas";

function App() {

  return (
    <div className="App">
      <CrearUser />
      <br />
      <Login />
      <br />
      <User />
      <br />
      <MasVistas/>
    </div>
  );
}

export default App;
