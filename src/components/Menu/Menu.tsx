import React from 'react';
import { NavLink } from 'react-router-dom';

import Accordion from 'components/Accordion/Accordion';
import ExitIcon from 'components/Icons/ExitIcon';
import SettingsIcon from 'components/Icons/SettingsIcon';

import { accordionItems, navItems } from 'utils/variables';

import styles from './Menu.module.scss';

function Menu() {
  return (
    <nav className={styles.menu}>
      <h3 className={styles.menuTitle}>Меню</h3>
      <ul className={styles.menuList}>
        {navItems.map(({ id, path, text, icon }) => (
          <li className={styles.menuItem} key={id}>
            <NavLink end to={path} className={styles.menuItemLink}>
              <div className={styles.menuIconWrapper}>{icon}</div>
              <p className={styles.menuItemLinkText}>{text}</p>
            </NavLink>
          </li>
        ))}
        <Accordion
          accordionText="Настройки"
          accordionIcon={<SettingsIcon />}
          items={accordionItems}
        />
        <li className={styles.menuItem}>
          <NavLink end to="/exit" className={styles.menuItemLink}>
            <div className={styles.menuIconWrapper}>
              <ExitIcon />
            </div>
            <p className={styles.menuItemLinkText}>Выход</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
