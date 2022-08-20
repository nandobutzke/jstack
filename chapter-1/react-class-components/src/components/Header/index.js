import React, { Component } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(values) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button type="button" onClick={values.handleToggleTheme}>
              { values.theme === 'dark' ? '🌞' : '🌚' }
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}