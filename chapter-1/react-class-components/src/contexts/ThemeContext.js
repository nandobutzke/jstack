import React, { createContext } from 'react';

export const ThemeContext = createContext('dark');

export class ThemeProvider extends React.Component {
    state = {
        theme: JSON.parse(localStorage.getItem('theme')),
    }

    handleToggleTheme = () => {
        this.setState(prevState => ({ 
            theme: prevState.theme === 'dark' 
            ? 'light' 
            : 'dark'
        }), () => {
            localStorage.setItem('theme', JSON.stringify(this.state.theme));
        });

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