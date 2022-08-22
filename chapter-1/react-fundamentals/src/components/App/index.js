import React from 'react';
import GlobalStyle from '../../styles/global';

import Header from '../Header';
import Routes from '../../Routes';

import { PostProvider } from '../../hooks/usePost';

import { ThemeManagerProvider } from '../../hooks/useManagerTheme';
import { BrowserRouter, Link } from 'react-router-dom';
import { Nav } from './styles';

export function App() {
    return (
        <BrowserRouter>
            <ThemeManagerProvider>
                <PostProvider>
                    <GlobalStyle />
                    <Header />
                    <Nav>
                        <Link to="/">Home</Link>
                        <Link to="/posts">Posts</Link>
                    </Nav>
                    <Routes />
                </PostProvider>
            </ThemeManagerProvider>
        </BrowserRouter>
    );
}
