import { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { getTheme, applyThemeToCSS } from '../themes';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [category, setCategory] = useState('biotech');
    const [mode, setMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('portfolio-mode');
            if (saved) return saved;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark';
    });

    const theme = useMemo(() => getTheme(category), [category]);

    useEffect(() => {
        applyThemeToCSS(theme, mode);
    }, [theme, mode]);

    useEffect(() => {
        localStorage.setItem('portfolio-mode', mode);
    }, [mode]);

    const toggleMode = useCallback(() => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const switchCategory = useCallback((cat) => {
        setCategory(cat);
    }, []);

    const contextValue = useMemo(
        () => ({
            category,
            setCategory: switchCategory,
            mode,
            setMode,
            toggleMode,
            theme,
        }),
        [category, switchCategory, mode, toggleMode, theme]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}
