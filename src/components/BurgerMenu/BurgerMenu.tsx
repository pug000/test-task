import Menu from 'components/Menu/Menu';
import React from 'react';

import styles from './BurgerMenu.module.scss';

function BurgerMenu() {
  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burgerMenuOverlay} />
      <div className={styles.burgerMenuWrapper}>
        <Menu />
      </div>
    </div>
  );
}

export default BurgerMenu;
