import { createContext, useState } from 'react';

interface IThemeContext {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const defaultState: IThemeContext = {
  theme: 'light',
  setTheme: () => {},
};

export type State = typeof defaultState;

export const ThemeContext = createContext<State>(defaultState);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<State['theme']>('light');

  const value: IThemeContext = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
