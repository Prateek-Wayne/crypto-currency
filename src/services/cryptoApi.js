import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "X-RapidAPI-Key": process.env.REACT_APP_CRYPTO_API_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_API_HOST
};
const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;
const createRequests = (url) => {
  return {
    url,
    headers: cryptoApiHeader,
  };
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApiReducer",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequests(`/coins?limit=${count}`),
    }),
    getCrypto: builder.query({
      query: (params) => createRequests(`/coin/${params}`),
    }),
    getHistory: builder.query({
      query: (coinId) => {
        console.log("🚀 ~ file: cryptoApi.js:27 ~ coinId:", coinId.id);
        console.log("🚀 ~ file: cryptoApi.js:27 ~ time:", coinId.time);

        return createRequests(
          `/coin/${coinId.id}/history?timePeriod=${coinId.time}`,
        );
      },
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoQuery, useGetHistoryQuery } =
  cryptoApi;
// https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history
