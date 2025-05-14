import style from '../styles/news-blog.module.css'

export const NewsBlog = () => {
  return (
    <div className={style.blog}>
      <h2 className={style.title_news}>Название статьи</h2>
      <div className={style.info_news}>
        <p className={style.info_text}>Рейтинг статьи</p>
        <p className={style.info_text}>Ник автора</p>
        <p className={style.info_text}>Дата</p>
      </div>
    </div>
  );
};
