import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoIcon from '../Icons/LogoIcon';
import ProfileIcon from '../Icons/ProfileIcon';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <NavLink end to="/" className={styles.headerLogo}>
          <div className={styles.headerLogoIconWrapper}>
            <LogoIcon />
          </div>
          <h1 className={styles.headerLogoTitle}>Wrench CRM</h1>
        </NavLink>
        <div className={styles.headerProfile}>
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
