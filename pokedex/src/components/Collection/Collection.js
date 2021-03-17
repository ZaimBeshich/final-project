import React from "react";
import SingleCard from "../SingleCard/SingleCard";
import Container from 'react-bootstrap/Container'

const Collection = ({ pokemons, selectPokemon }) => {
  const elements = pokemons.map(item => {
    return <SingleCard
      {...item}
      key={item.id}
      selectPokemon={(desc) => selectPokemon(desc)}
    />;
  });

  return (
    <Container
      className="d-flex flex-row flex-wrap justify-content-center">
      {elements}
    </Container>
  )
}

export default Collection;