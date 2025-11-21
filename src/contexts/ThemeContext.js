import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      background: isDark ? '#0f0f0f' : '#ffffff',
      surface: isDark ? '#151515' : '#f5f5f5',
      text: isDark ? '#e5e7eb' : '#1f1f1f',
      textSecondary: isDark ? '#9ca3af' : '#6b7280',
      textPrimary: isDark ? '#ffffff' : '#000000',
      border: isDark ? '#2d2d2d' : '#e5e7eb',
      navHover: isDark ? '#151515' : '#f0f0f0',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

