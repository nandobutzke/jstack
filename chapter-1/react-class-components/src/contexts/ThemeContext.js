import React, { createContext } from 'react';

export const ThemeContext = createContext('dark');

export class ThemeProvider extends React.Component {
    state = {
        theme: 'dark',
    }

    handleToggleTheme = () => {
        this.setState(prevState => ({ 
            theme: prevState.theme === 'dark' 
            ? 'light' 
            : 'dark'
        }));
    }

    render() {
        const { theme } = this.state;

        return (
            <ThemeContext.Provider value={{ theme, handleToggleTheme: this.handleToggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}