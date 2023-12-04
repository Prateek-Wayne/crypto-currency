import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeader = {
  "content-type": "application/json",
  "X-RapidAPI-Key": process.env.REACT_APP_NEWS_API_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_NEWS_API_HOST,
};
const baseUrl = process.env.REACT_APP_NEWS_API_URL;
const newsData = {
  query: "Crypto",
  page: 2,
  time_bounded: true,
  from_date: "01/11/2023",
  to_date: "01/12/2023",
  location: "INDIA",
  category: "",
  source: "",
};

export const cryptoNews = createApi({
  reducerPath: "cryptoNewsReducer",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => ({
        url: "/newsv2",
        method: "POST",
        headers: newsApiHeader,
        body: newsData,
      }),
    }),
  }),
});
export const { useGetNewsQuery } = cryptoNews;
