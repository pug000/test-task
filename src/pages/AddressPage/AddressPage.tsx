import React from 'react';

import Form from 'components/Form/Form';
import Address from 'components/Address/Address';

import styles from './AddressPage.module.scss';

function AddressPage() {
  return (
    <section className={styles.addressPage}>
      <h2 className={styles.addressPageTitle}>Поиск адресов</h2>
      <p className={styles.addressPageSubtitle}>Введите интересующий вас адрес</p>
      <Form />
      <Address />
    </section>
  );
}

export default AddressPage;
