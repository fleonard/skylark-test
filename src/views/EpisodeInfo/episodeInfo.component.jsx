import React from 'react';

import PropTypes from 'prop-types';

import styles from './episodeInfo.module.css';
import cn from '../../utils/classname';

import { isEmpty } from 'ramda';

class EpisodeInfo extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.errGetEpisode) {
      return (
        <div className={cn(
          styles.container,
          { [ styles.isEpisodeInfoVisible ]: this.props.isEpisodeInfoVisible }
        )}>
          <p>{this.props.errGetSets}</p>
        </div>
      );
    } else {
      const episode = this.props.episode;
      return (
        <div className={cn(
          styles.container,
          { [ styles.isEpisodeInfoVisible ]: this.props.isEpisodeInfoVisible }
        )}>
          <h2>{episode.title}</h2>
          {episode.subtitle ? <h3>{episode.subtitle}</h3> : ''} 
          {this.props.episodeImageUrl ? <img src={this.props.episodeImageUrl} /> :  <img src="http://via.placeholder.com/640x480" />}
          <p className={cn(styles.close)} onClick={() => this.props.onClick()}>X</p>
        </div>
      );
    }
    
  }
}

EpisodeInfo.propTypes = {
  onClick: PropTypes.func
};

export default EpisodeInfo;

