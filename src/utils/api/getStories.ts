import axios, { AxiosResponse } from "axios";
import { INews } from "../types/interface";

export const getStories = async (id: number): Promise<INews> => {
  try {
    const getNews: AxiosResponse<INews> = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    return getNews.data;
  } catch (error) {
    throw error;
  }
};
