import React from 'react';

import PropTypes from 'prop-types';

import styles from './home.module.css';
import cn from '../../utils/classname';

import EpisodeInfoContainer from '../EpisodeInfo/episodeInfo.container';

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    props.onInit();
  }

  render() {
    if (this.props.errGetSets) {
      return (
        <div className={cn(styles.container)}>
          <p>{this.props.errGetSets}</p>
        </div>
      );
    } else if (this.props.home.length === 0) {
      return (
        <div className={cn(styles.container)}>
          <h2>No Home set found</h2>
        </div>
      );
    } else {
      const home = this.props.home[0];
      return (
        <div>
          <div className={cn(styles.container)}>
            <h2>{home.title}</h2>
            {home.body ? <p className={cn(styles.body)}>{home.body}</p> : ''}
            <div className={cn(styles.episodeList)}>
              {
                home.items.map((item, i) => {
                  if (item.content_type === 'divider') {
                    return <p className={cn(styles.headings)} key={i}>{item.heading}</p>;
                  }
                  if (item.content_type === 'episode') {
                    return <p className={cn(styles.episode)} key={i} onClick={() => this.props.onClick(item.content_url)}>Episode {item.position}</p>;
                  }
                })
              }
            </div>
          </div>
          <EpisodeInfoContainer />
        </div>
      );
    }
    
  }
}

Home.propTypes = {
  onInit: PropTypes.func,
  onClick: PropTypes.func
};

export default Home;
