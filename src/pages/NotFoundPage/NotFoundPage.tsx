import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';

function NotFound() {
  return (
    <section className={styles.notFoundPage}>
      <h2 className={styles.notFoundPageTitle}>Страница не найдена</h2>
      <NavLink to="/" end>
        <button type="button" className={styles.notFoundPageButton}>
          На главную
        </button>
      </NavLink>
    </section>
  );
}

export default NotFound;
