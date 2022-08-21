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

  state = {
    changed: false
  }

  componentDidMount() {
    console.log('componentDidMount executed');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate executed', {
      currentState: this.state,
      prevProps,
      prevState
    })
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch executed', { error, info })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', { 
      currentState: this.state,
      nextProps,
      nextState
    })

    return false;
  }
  
  render() {
    console.log('rendered');

    return (
      <ThemeProvider>
        <button onClick={() => this.setState(prevState => ({ changed: prevState.changed === false ? true : false }))}>
          change state
        </button>
        <ThemeContext.Consumer>
          {({ theme }) => (
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
