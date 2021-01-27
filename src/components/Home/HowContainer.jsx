import React from 'react';

import styles from '../../scss/home.module.scss';

export default function HowContainer() {
  return (
    <div id="services" className={styles['how-container']}>
      <h1>How CodeTrophs Works?</h1>
      <p>
        At CodeTrophs, the contributors can choose their level of difficulty and
        also their field of expertise to start contributing accordingly, the
        amazing feature which saves your time and effort!
      </p>
    </div>
  );
}
