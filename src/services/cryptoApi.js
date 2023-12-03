import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "X-RapidAPI-Key": "ceeaa5a1c1msh413b805b715e223p120ba4jsn0ec7e0c04e3d",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
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
