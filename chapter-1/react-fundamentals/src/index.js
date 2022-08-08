import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { ThemeManagerProvider } from './hooks/useManagerTheme';

render(
    <ThemeManagerProvider>
        <App />
    </ThemeManagerProvider>,
    document.getElementById('root')
);