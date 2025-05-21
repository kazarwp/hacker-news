import { useEffect } from "react";
import styles from "../styles/theme-button.module.css";
import { useAppDispatch, useAppSelector } from "../utils/reduxHooks";
import { setTheme } from "../features/theme/theme-slice";

export const SwitchThemeButton = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.theme)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const handleChangeTheme = () => {
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <button className={styles.theme_button} onClick={handleChangeTheme}>Светлая тема</button>
    </>
  );
};
