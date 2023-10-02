import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: () => "data/characters.json",
    }),
  }),
});

export const { useGetAllCharactersQuery } = apiSlice;
