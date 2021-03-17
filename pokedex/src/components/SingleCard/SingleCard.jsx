import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';


const SingleCard = ({ name,
  isCatched,
  catchDate,
  id,
  catchPokemon,
  selectPokemon }) => {
  const srcImg = `../pokemons/${id}.png`;

  return (
    <Card className='text-center m-1' border="dark" style={{ width: '15rem' }}>
      <Link to={`/PokemonPage/${name}`}>
        <Card.Img
          variant="top"
          src={id <= 720 ? srcImg : "https://pngimg.com/uploads/question_mark/question_mark_PNG52.png"}
          alt={name}
          onClick={() => selectPokemon({
            name,
            id,
            isCatched,
            catchDate
          })}
        />
      </Link>
      <Card.Body>
        <Card.Title>
          {`${id}. ${name.toUpperCase()}`}
        </Card.Title>
        <Button
          size='lg' block
          className={isCatched ? "btn-primary disabled" : "btn-primary"}
          disabled={isCatched ? true : false}
          onClick={() => catchPokemon(id)}
        >
          {isCatched ? "Caugth" : "Catch"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
