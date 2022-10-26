import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Address, Response } from 'ts/interfaces';

import { baseUrl, apiKey } from 'utils/variables';

const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Addresses'],
  endpoints: (builder) => ({
    fetchingAddresses: builder.query<Address[], string>({
      query: (query: string) => ({
        url: `suggestions/api/4_1/rs/suggest/address`,
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Token ${apiKey}`,
        },
        body: JSON.stringify({ query }),
      }),
      transformResponse: (response: Response): Address[] => response.suggestions,
    }),
  }),
});

export const { useFetchingAddressesQuery } = addressApi;
export default addressApi;
