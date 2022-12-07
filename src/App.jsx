import Login from "./component/auth/login";
import CrearUser from "./component/auth/crearUser";
import User from "./component/auth/user";

function App() {
  return (
    <div className="App">
      <CrearUser />
      <br />
      <Login />
      <br />
      <User />
    </div>
  );
}

export default App;
