import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://hacker-news.firebaseio.com/v0/'}),
  endpoints: (build) => ({
    getIdNewStories: build.query({
      query: () => `topstories.json?print=pretty`
    })
  })
})