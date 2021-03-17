import React from "react";
import { Redirect } from 'react-router-dom';


const PokemonPage = ({ selected, catchPokemon, pokemons }) => {

  if (selected === null) {
    return <Redirect to='/home' />;
  }

  const {
    name,
    isCatched,
    id,
    catchDate,
  } = pokemons[selected.id - 1];

  const srcImg = `../pokemons/${id}.png`;

  return (

    <div className="d-flex flex-wrap w-100 justify-content-center">
      <div className="card text-center m-3">

        <img src={`${id <= 720 ? srcImg : "https://pngimg.com/uploads/question_mark/question_mark_PNG52.png"}`}
          className="card-img-top" alt={name} />

        <div className="card-body">
          <h5 className="card-title">
            {`${id}. ${name.toUpperCase()}`}
          </h5>
          <p className="card-text">
            {catchDate ? `${`Was caught on ${catchDate.toLocaleString()}`}` : ''}
          </p>
          <button
            className={isCatched ? "btn btn-primary disabled" : "btn btn-primary"}
            disabled={isCatched ? true : false}
            onClick={() => catchPokemon(id)}
          >
            {isCatched ? "Caugth" : "Catch"}
          </button>
        </div>
      </div>
    </div>

  )
}

export default PokemonPage;