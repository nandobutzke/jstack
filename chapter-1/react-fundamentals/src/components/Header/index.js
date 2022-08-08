import React from 'react';

import { HeaderContainer } from './styles';

import { usePost } from '../../hooks/usePost';
import { useManagerTheme } from '../../hooks/useManagerTheme';

export default function Header() {
    const { theme, handleToggleTheme } = useManagerTheme();
    const { handleUpdatePosts } = usePost();

    return (
        <HeaderContainer>
            <h1>JStack's Blog</h1>
            <div>
                <button onClick={handleUpdatePosts}>
                    🔃
                </button>
                <button onClick={handleToggleTheme}>
                    {theme === 'dark' ? '🌞' : '🌚'}
                </button>
            </div>
        </HeaderContainer>
    );
}
