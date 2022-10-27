import React from 'react';

import styles from './NoResult.module.scss';

function NoResult() {
  return (
    <div className={styles.noResult}>
      <p className={styles.noResultText}>Cовпадений не найдено</p>
    </div>
  );
}

export default NoResult;
