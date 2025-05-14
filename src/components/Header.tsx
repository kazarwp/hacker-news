import style from '../styles/header.module.css'
import logo from '../images/hacker-news-logo.png'

export const Header = () => {
  return (
    <>
      <div className={style.header}>
        <img className={style.logo} src={logo} alt="Logo" />
        <h1 className={style.text}>Hacker News</h1>
      </div>
    </>
  );
};
