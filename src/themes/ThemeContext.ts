import { createContext } from "react";

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProp {
  theme?: Themes;
  setTheme?: (theme: Themes) => void;
}

export const ThemeContext = createContext<ThemeContextProp>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';