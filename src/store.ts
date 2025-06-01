import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/theme/theme-slice";
import { newsApi } from "./features/news/news-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
