import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "./ThemeContext";
import { useMemo, useState } from "react";

const defaultThemes = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT;

const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState<Themes>(defaultThemes);

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme  
  }), [theme])

  return (
    <ThemeContext.Provider value ={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider;