import React from 'react';

import AddressIcon from 'components/Icons/AddressIcon';

import styles from './Form.module.scss';

function Form() {
  return (
    <form className={styles.form} autoComplete="off">
      <input
        className={styles.input}
        minLength={3}
        required
        placeholder="Введите интересующий вас адрес"
      />
      <button type="submit" className={styles.formButton}>
        <AddressIcon />
        <span className={styles.formButtonText}>Поиск</span>
      </button>
    </form>
  );
}

export default Form;
