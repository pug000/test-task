import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import React from 'react';
import { Outlet } from 'react-router';

import styles from 'styles/styles.scss';

function AppLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.menuWrapper}>
          <Menu />
        </div>
        <Outlet />
      </main>
      <BurgerMenu />
    </>
  );
}

export default AppLayout;
