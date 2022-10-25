import React from 'react';
import { Outlet } from 'react-router';

import styles from 'styles/styles.scss';

function AppLayout() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}

export default AppLayout;
