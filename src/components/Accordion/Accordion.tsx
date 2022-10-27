import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import { setBurgerMenuShown } from 'redux/slices/menuSlice';

import ArrowIcon from 'components/Icons/ArrowIcon';

import { NavItem } from 'ts/interfaces';

import styles from './Accordion.module.scss';

interface AccordionProps {
  accordionText: string;
  accordionIcon: JSX.Element;
  items: NavItem[];
}

function Accordion({ accordionText, accordionIcon, items }: AccordionProps) {
  const [isContentShown, setContentShown] = useState(false);

  const { isBurgerMenuShown } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  const closeBurgerMenuOnClick = useCallback(() => {
    if (isBurgerMenuShown) {
      dispatch(setBurgerMenuShown(false));
    }
  }, [isBurgerMenuShown]);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordionHeader}
        aria-hidden="true"
        onClick={() => setContentShown((prev) => !prev)}
      >
        <div className={styles.accordionHeaderContainer}>
          {accordionIcon}
          <p className={styles.accordionHeaderText}>{accordionText}</p>
        </div>
        <div
          className={
            isContentShown
              ? `${styles.accordionHeaderIconWrapper} ${styles.active}`
              : `${styles.accordionHeaderIconWrapper}`
          }
        >
          <ArrowIcon />
        </div>
      </div>
      {isContentShown && (
        <ul className={styles.accordionContent}>
          {items.map(({ id, icon, path, text }) => (
            <li className={styles.accordionContentList} key={id}>
              <NavLink
                end
                to={path}
                className={styles.accordionContentLink}
                onClick={closeBurgerMenuOnClick}
              >
                <div className={styles.accordionContentIconWrapper}>{icon}</div>
                <p className={styles.accordionContentLinkText}>{text}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Accordion;
