import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import { setBurgerMenuShown } from 'redux/slices/menuSlice';

import Menu from 'components/Menu/Menu';

import styles from './BurgerMenu.module.scss';

function BurgerMenu() {
  const { isBurgerMenuShown } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  const closeBurgerMenuOnClick = useCallback(() => {
    if (isBurgerMenuShown) {
      dispatch(setBurgerMenuShown(false));
    }
  }, [isBurgerMenuShown]);

  return (
    <div className={styles.burgerMenu}>
      <div
        aria-hidden="true"
        className={
          isBurgerMenuShown
            ? `${styles.burgerMenuOverlay} ${styles.active}`
            : `${styles.burgerMenuOverlay}`
        }
        onClick={closeBurgerMenuOnClick}
      />
      <div
        className={
          isBurgerMenuShown
            ? `${styles.burgerMenuWrapper} ${styles.active}`
            : `${styles.burgerMenuWrapper}`
        }
      >
        <Menu />
      </div>
    </div>
  );
}

export default BurgerMenu;
