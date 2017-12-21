import Home from './home.component';
import { connect } from 'react-redux';

import actions from '../../actions';

import { skylarkGetData } from '../../config/apis';

function mapStateToProps (state) {
  const { errGetSets, home } = state.data;

  return {
    errGetSets,
    home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInit() {
      dispatch(actions.getSets(skylarkGetData('/api/sets/')));
    },
    onClick(url) {
      dispatch(actions.getEpisode(skylarkGetData(url)));
    }
  };
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;