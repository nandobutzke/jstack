import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export function Footer() {
  return (
    <ThemeContext.Consumer>
      {({ theme, handleToggleTheme }) => (
        <Container>
          <span>JStack's Blog. Todos os direitos reservados.</span>
          <button type="button" onClick={handleToggleTheme}>
            { theme === 'dark' ? '🌞' : '🌚' }
          </button>
        </Container>
      )}
    </ThemeContext.Consumer>
  );
}

