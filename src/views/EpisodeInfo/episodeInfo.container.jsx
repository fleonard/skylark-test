import EpisodeInfo from './episodeInfo.component';
import { connect } from 'react-redux';

import actions from '../../actions';

function mapStateToProps (state) {
  const { episode, episodeImageUrl, errGetEpisode, } = state.data;
  const { isEpisodeInfoVisible } = state.ui;

  return {
    episode,
    episodeImageUrl,
    errGetEpisode,
    isEpisodeInfoVisible
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick() {
      dispatch(actions.clearEpisode());
    }
  };
}

const EpisodeInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodeInfo);

export default EpisodeInfoContainer;