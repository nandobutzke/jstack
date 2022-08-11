import React from 'react';
import GlobalStyle from '../../styles/global';

import Header from '../Header';
import { PostList } from '../PostList';

import { PostProvider } from '../../hooks/usePost';

import { ThemeManagerProvider } from '../../hooks/useManagerTheme';

export function App() {
    return (
        <ThemeManagerProvider>
            <PostProvider>
                <GlobalStyle />
                <Header />
                <PostList />
            </PostProvider>
        </ThemeManagerProvider>
    );
}
