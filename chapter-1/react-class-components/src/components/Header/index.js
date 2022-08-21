import React, { Component } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

function Hoc(HeaderComponent) {
  return class Component extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {(values) => (
            <HeaderComponent handleToggleTheme={values.handleToggleTheme} theme={values.theme} />
          )}
        </ThemeContext.Consumer>
      );
    }
  }
}

class Header extends Component {
  componentDidUpdate(prevProps, _) {
    if (this.props.theme !== prevProps.theme) {
      console.log('tema mudou');
    }
  }

  render() {
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type="button" onClick={this.props.handleToggleTheme}>
          { this.props.theme === 'dark' ? '🌞' : '🌚' }
        </button>
      </Container>
    );
  }
}

export default Hoc(Header);