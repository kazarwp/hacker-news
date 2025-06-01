import { useGetNewPostQuery } from "../features/news/news-slice";
import { useAppSelector } from "../utils/reduxHooks";

import style from "../styles/news-blog.module.css";

export const NewsBlog = ({ id }: { id: number }) => {
  const theme = useAppSelector((state) => state.theme);
  const themeChange = theme === "dark" ? style.blogDark : style.blogLight;
  const { data, isLoading, isError } = useGetNewPostQuery(id);

  if (isLoading) {
    return <div className={`${style.blog} ${themeChange}`}>Загрузка...</div>;
  }

  if (isError || !data) {
    return (
      <div className={`${style.blog} ${themeChange}`}>
        Ошибка загрузки новости {id}
      </div>
    );
  }

  return (
    <div className={`${style.blog} ${themeChange}`}>
      <h2 className={style.title_news}>{data.title}</h2>
      <div className={style.info_news}>
        <p className={style.info_text}>{data.score}</p>
        <p className={style.info_text}>{data.by}</p>
        <p className={style.info_text}>{data.time}</p>
      </div>
    </div>
  );
};
