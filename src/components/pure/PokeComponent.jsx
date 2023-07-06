import React from "react";
import { useEffect, useState } from "react";
import { getPokemon } from "../../services/axiosService";

const PokeComponent = ({ id, winFunc, defeatFunc }) => {

  const [pokeName, setPokeName] = useState(null);


  useEffect(() => {
    getPokemon(id)
      .then((response) => {
        // console.log(response.data);
        // console.log(response.data.abilities);
        setPokeName(response.data.forms[0].name);        
      })
      .catch((error) => console.log(error))
      // .finally(() => console.log("Peticion finalizada"));
  }, [id]);

  return (
    <div className="py-3">
      {pokeName != null ? (
        <div>
          <h2 className="pt-3 font-weight-bold">¿Ganarías a <span style={{textTransform:'capitalize'}}>{pokeName}</span>?</h2>
          <img
            style={{ width: "150px" }}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={pokeName}
          ></img>
          <div>
            <button onClick={() => winFunc(id)}>Le meto un meko</button>
            <button onClick={() => defeatFunc(id)}>Kita kita bro</button>
          </div>
        </div>
      ) : (
        <h1>No hay pokemon seleccionado</h1>
      )}
    </div>
  );
};

export default PokeComponent;
