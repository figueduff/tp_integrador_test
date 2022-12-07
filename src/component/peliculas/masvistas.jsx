import React from "react";
import { useState, useEffect, useRef } from "react";

function masvistas() {
  const [pelis, setPelis] = useState([]);
  const [pagina, setPagina] = useState(1);
  const peliSeleccionada = useRef();
  const key = "e4e0f9c7c990f3921d36b5095affbe99";

  // fetch de api mas vistas

  const datos = async (pagina) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-ES&page=${pagina}`
    );
    const data = await response.json();
    setPelis((pelisActuales) => [...pelisActuales, ...data.results]);
    console.log(data);
  };

  useEffect(() => {
    datos(pagina);
  }, [pagina]);

  // ver mas
  const verMas = () => {
    setPagina((prevstate) => prevstate + 1);
  };

  //   pelicula seleccionada
  //   function handleClick(e) {
  //     const listOption = e.target.src;
  //     console.log("levanto ", listOption);
  //     setImg(listOption);
  //     // setimg(llego);
  //     // console.log("llego ", llego);
  //   }

  return (
    <>
      <div>
        {pelis.map((item) => (
          <img
            key={item.id}
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt=""
          />
        ))}
      </div>
      <button onClick={verMas} disabled={pagina > 15 ? true : false}>
        Ver más
      </button>
    </>
  );
}

export default masvistas;
