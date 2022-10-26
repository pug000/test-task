import React from 'react';

import styles from './AddressPage.module.scss';

function AddressPage() {
  return (
    <section className={styles.address}>
      <h2 className={styles.addressTitle}>Поиск адресов</h2>
      <p className={styles.addressSubtitle}>Введите интересующий вас адрес</p>
    </section>
  );
}

export default AddressPage;
