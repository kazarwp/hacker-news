import style from '../styles/header.module.css'
import logo from '../images/hacker-news-logo.png'
import { SwitchThemeButton } from './SwitchThemeButton';
import { useAppSelector } from '../utils/reduxHooks';

export const Header = () => {

  const theme = useAppSelector(state => state.theme)

  const themeChange = theme === 'dark' ? style.headerDark : style.headerLight

  return (
    <>
      <div className={`${style.header} ${themeChange}`}>
        <img className={style.logo} src={logo} alt="Logo" />
        <h1 className={style.text}>Hacker News</h1>
        <SwitchThemeButton />
      </div>
    </>
  );
};
