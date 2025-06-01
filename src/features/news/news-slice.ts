import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://hacker-news.firebaseio.com/v0/'}),
  endpoints: (build) => ({
    getIdNewPosts: build.query<number[], undefined>({
      query: () => `topstories.json?`,
      
    }),
    getNewPost: build.query({
      query: (id: number) => `item/${id}.json?print=pretty?`
      })
    })
  })



export const { useGetIdNewPostsQuery, useGetNewPostQuery } = newsApi