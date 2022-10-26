import Loader from 'components/Loader/Loader';
import NoResult from 'components/NoResult/NoResult';
import { useAppSelector } from 'hooks/useRedux';
import React from 'react';
import { useFetchingAddressesQuery } from 'redux/services/addressService';
import getRandomNumber from 'utils/functions';

import styles from './Address.module.scss';

function Address() {
  const { query } = useAppSelector((state) => state.query);
  const { data: suggestions, isLoading: isLoadingAddresses } = useFetchingAddressesQuery(query, {
    skip: query.length < 3,
  });

  if (isLoadingAddresses) {
    return <Loader />;
  }

  if (query && !suggestions?.length) {
    return <NoResult />;
  }

  return (
    <div className={styles.addressWrapper}>
      {!!suggestions?.length && (
        <div className={styles.address}>
          <h2 className={styles.addressTitle}>Адреса</h2>
          <div className={styles.addressItemWrapper}>
            {suggestions.map(({ data }) => {
              const region = data.city_type_full ?? data.region ?? '';
              const regionName = data.city ?? data.region_type_full ?? '';
              const street =
                data.street_type_full ??
                data.city_district_type_full ??
                data.area_type_full ??
                data.settlement_type_full ??
                '';
              const streetName =
                data.street ?? data.city_district ?? data.area ?? data.settlement ?? '';
              const streetNumber = getRandomNumber(1, 99);
              const houseNumber = getRandomNumber(1, 150);
              const text = `${region} ${regionName}${street ? `, ${street}` : ''} ${
                streetName ? `${streetName} ${streetNumber}, дом ${houseNumber}` : ''
              }`;
              return (
                <div className={styles.addressItem} key={data.fias_id}>
                  <a
                    href={`mailto:roman.troshin98@gmail.com?body=${text}`}
                    className={styles.addressItemLink}
                  >
                    {text}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Address;
