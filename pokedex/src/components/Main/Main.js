import React from "react";
import SingleCard from "../SingleCard/SingleCard";
import { Container, Button } from 'react-bootstrap';


const Main = ({ pokemons,
  catchPokemon,
  loadMore,
  count,
  selectPokemon }) => {

  const elements = pokemons.map(item => {
    return <SingleCard
      {...item}
      key={item.id}
      catchPokemon={() => catchPokemon(item.id)}
      selectPokemon={(desc) => selectPokemon(desc)}
    />;
  });

  return (
    <Container fluid
      className="d-flex flex-row flex-wrap justify-content-center" >
      {elements}
      <div Container className="d-flex flex-wrap w-75 justify-content-center" >
        <Button
          variant="dark"
          className="sticky-bottom"
          onClick={() => loadMore(count)}
        >
          Load more
            </Button>
      </div>
    </Container>
  )
}

export default Main;