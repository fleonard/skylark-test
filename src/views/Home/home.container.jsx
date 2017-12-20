import Home from './home.component';
import { connect } from 'react-redux';

import actions from '../../actions';

import { skylarkGetSets } from '../../config/apis';

function mapStateToProps (state) {
  const { home } = state.data;

  return {
    home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInit() {
      dispatch(actions.getSets(skylarkGetSets()));
    }
  };
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;