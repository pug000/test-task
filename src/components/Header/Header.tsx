import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import { setBurgerMenuShown } from 'redux/slices/menuSlice';

import LogoIcon from '../Icons/LogoIcon';
import ProfileIcon from '../Icons/ProfileIcon';

import styles from './Header.module.scss';

function Header() {
  const { isBurgerMenuShown } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  const toggleBurgerMenuOnClick = useCallback(() => {
    dispatch(setBurgerMenuShown(!isBurgerMenuShown));
  }, [isBurgerMenuShown]);

  const closeBurgerMenuOnClick = useCallback(() => {
    if (isBurgerMenuShown) {
      dispatch(setBurgerMenuShown(false));
    }
  }, [isBurgerMenuShown]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContainerLeftSide}>
          <button
            type="button"
            className={
              isBurgerMenuShown
                ? `${styles.headerBurgerMenu} ${styles.active}`
                : `${styles.headerBurgerMenu}`
            }
            onClick={toggleBurgerMenuOnClick}
          >
            <span className={styles.burgerMenuLine} />
            <span className={styles.burgerMenuLine} />
            <span className={styles.burgerMenuLine} />
          </button>
          <NavLink end to="/" className={styles.headerLogo} onClick={closeBurgerMenuOnClick}>
            <div className={styles.headerLogoIconWrapper}>
              <LogoIcon />
            </div>
            <h1 className={styles.headerLogoTitle}>Wrench CRM</h1>
          </NavLink>
        </div>
        <div className={styles.headerContainerRightSide}>
          <div className={styles.headerProfileIconWrapper}>
            <ProfileIcon />
          </div>
          <div className={styles.headerProfileWrapper}>
            <p className={styles.headerProfileText}>Имя Фамилия</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
