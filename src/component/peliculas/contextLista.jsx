import { createContext, useState } from "react";

export const ListaContext = new createContext();

function ListaContextProvider({ children }) {
  const [lista, setLista] = useState([]);

  return (
    <>
      <ListaContext.Provider value={[lista, setLista]}>
        {children}
      </ListaContext.Provider>
    </>
  );
}

export default ListaContextProvider;
