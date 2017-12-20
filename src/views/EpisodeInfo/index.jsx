import React from 'react';

import styles from './app.module.css';
import cn from '../../utils/classname';

const App = () =>
  <div className={cn(styles.main)}>
    <h2>TEST APP</h2>
  </div>;

export default App;
