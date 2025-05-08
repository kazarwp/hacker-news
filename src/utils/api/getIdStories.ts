import axios, { AxiosResponse } from "axios";

export const getIdStories = async (): Promise<number[]> => {
  try {
    const idStories: AxiosResponse<number[]> = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    return idStories.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
