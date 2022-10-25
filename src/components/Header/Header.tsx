import React from 'react';

import LogoIcon from '../Icons/LogoIcon';
import ProfileIcon from '../Icons/ProfileIcon';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <div className={styles.headerLogoIconWrapper}>
            <LogoIcon />
          </div>
          <h1 className={styles.headerLogoTitle}>Wrench CRM</h1>
        </div>
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
