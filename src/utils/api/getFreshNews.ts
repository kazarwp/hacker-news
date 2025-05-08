import { INews } from "../types/interface";
import { getIdStories } from "./getIdStories";
import { getStories } from "./getStories";

export const getFreshNews = async (): Promise<INews[]> => {
  const idStoris: number[] = await getIdStories(); 
  const freshStories: INews[] = await Promise.all(
    idStoris.map(async (id) => {
      return await getStories(id);
    })
  );

  console.log(freshStories)

  return freshStories;
};