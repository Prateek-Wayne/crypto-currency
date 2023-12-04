import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeader = {
  "content-type": "application/json",
  "X-RapidAPI-Key": "733370dccdmsh53292aa94ff58d8p1486f6jsn4ca643002735",
  "X-RapidAPI-Host": "newsnow.p.rapidapi.com",
};
const baseUrl = "https://newsnow.p.rapidapi.com";
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
