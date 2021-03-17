import { connect } from 'react-redux';
import PokemonPage from "./PokemonPage";
import {catchPokemon} from "../../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    catchPokemon: (id) => dispatch(catchPokemon(id))
  }
};

const mapStateToProps = ({selected,  pokemons }) => {
return {
  selected,
  pokemons
};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonPage);