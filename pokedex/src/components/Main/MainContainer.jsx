import { connect } from 'react-redux';
import Main from "./Main";
import { catchPokemon, getPokemons, selectPokemon } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => {
return {
    catchPokemon: (id) => dispatch(catchPokemon(id)),
    loadMore: (count) => dispatch(getPokemons(count)),
    selectPokemon: (desc) => dispatch(selectPokemon(desc))
};
};

const mapStateToProps = ({ pokemons, count }) => {
return {
    pokemons,
    count
};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);