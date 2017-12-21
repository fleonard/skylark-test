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
            {
              home.items.map((item, i) => {
                if (item.content_type === 'divider') {
                  return <h3 key={i}>{item.heading}</h3>;
                }
                if (item.content_type === 'episode') {
                  return <p key={i} onClick={() => this.props.onClick(item.content_url)}>Episode {item.position}</p>;
                }
              })
            }
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
