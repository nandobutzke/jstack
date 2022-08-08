import React from 'react';
import GlobalStyle from '../../styles/global';

import Header from '../Header';
import { PostList } from '../PostList';

import { ThemeProvider } from 'styled-components';
import { PostProvider } from '../../hooks/usePost';

import { useManagerTheme } from '../../hooks/useManagerTheme';

export function App() {
    const { currentTheme } = useManagerTheme();

    return (
        <ThemeProvider theme={currentTheme}>
            <PostProvider>
                <GlobalStyle />
                <Header />
                <PostList />
            </PostProvider>
        </ThemeProvider>
    );
}
