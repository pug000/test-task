import AddressIcon from 'components/Icons/AddressIcon';
import React from 'react';

import styles from './Input.module.scss';

function Input() {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        minLength={3}
        required
        placeholder="Введите интересующий вас адрес"
      />
      <button type="button" className={styles.inputButton}>
        <AddressIcon />
        <span className={styles.inputButtonText}>Поиск</span>
      </button>
    </div>
  );
}

export default Input;
