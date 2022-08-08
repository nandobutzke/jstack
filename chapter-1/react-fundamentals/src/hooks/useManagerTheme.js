import React, { 
    useState, 
    useEffect, 
    useMemo, 
    createContext, 
    useContext 
} from 'react';
import themes from '../styles/themes';

export const ThemeContext = createContext('');

export function ThemeManagerProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const storageTheme = localStorage.getItem('theme');

        if (storageTheme) {
            return JSON.parse(storageTheme);
        }

        return '';
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    const currentTheme = useMemo(() => {
        return themes[theme] || themes.dark;
    }, [theme]);

    function handleToggleTheme() {
        setTheme((prevState) => (
            prevState === 'dark' 
            ? 'light' 
            : 'dark'
        ))
    }

    return (
        <ThemeContext.Provider value={{ theme, currentTheme, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useManagerTheme() {
    const context = useContext(ThemeContext);

    return context;
}
