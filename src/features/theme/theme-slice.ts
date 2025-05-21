import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'dark',
  reducers: {
    setTheme: (_, {payload}) => payload
  }
})

export const { setTheme } = themeSlice.actions

export const themeReducer = themeSlice.reducer