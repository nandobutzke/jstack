import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';

import themes from './styles/themes';

class App extends React.Component {
  /* constructor(props) {
    super(props);

    this.state = {
      theme: 'dark',
    }

    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  } */

  /*  state = {
    theme: 'dark',
  }

  handleToggleTheme = () => {
    this.setState(prevState =>  ({ theme: prevState.theme === 'dark' ? 'light' : 'dark' }));
  } */
  
  render() {
    //const { theme } = this.state;

    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, handleToggleTheme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>

    );
  }
}

export default App;
