import React from 'react';

import styles from './app.module.css';
import cn from '../../utils/classname';

import HomeContainer from '../Home/home.container';

const App = () =>
  <div className={cn(styles.main)}>
    <HomeContainer />
  </div>;

export default App;
