import { LOCAL_STORAGE_THEME_KEY, Themes,  ThemeContext} from "./ThemeContext";
import { useContext } from "react";

interface UseThemeResult {
    toggleTheme: () => void,
    theme: Themes
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}