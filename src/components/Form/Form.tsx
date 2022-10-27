import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import { setQuery } from 'redux/slices/querySlice';

import AddressIcon from 'components/Icons/AddressIcon';

import styles from './Form.module.scss';

interface FormFields {
  query: HTMLInputElement;
}

function Form() {
  const { query } = useAppSelector((state) => state.query);
  const dispatch = useAppDispatch();

  const setQueryOnSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement & FormFields>) => {
      event.preventDefault();

      dispatch(setQuery(event.currentTarget.query.value));
    },
    [query]
  );

  return (
    <form className={styles.form} autoComplete="off" onSubmit={setQueryOnSubmit}>
      <input
        type="text"
        className={styles.input}
        minLength={3}
        required
        name="query"
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
