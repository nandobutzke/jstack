import React, { createContext } from 'react';

export const ThemeContext = createContext('dark');

export class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);

        let theme = 'dark'

        this.state = {
            theme,
        }

        try {
            theme = JSON.parse(localStorage.getItem('theme'));
        } catch (err) {
            console.log(err);
        }
    }

    componentDidUpdate(_, prevState) {
        if (prevState.theme !== this.state.theme) {
            localStorage.setItem('theme', JSON.stringify(this.state.theme));
        }
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