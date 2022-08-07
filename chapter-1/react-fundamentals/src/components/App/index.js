import React, { useEffect, useMemo, useState } from 'react';
import GlobalStyle from '../../styles/global';
import Post from '../Post';
import Header from '../Header';
import themes from '../../styles/themes';
import { ThemeProvider } from 'styled-components';

export function App() {
    const [posts, setPosts] = useState([
        { id: Math.random(), title: 'Boas práticas para devs em início de carreira', subtitle: 'As principais lições e dicas compiladas para quem...', likes: 10, removed: false },
        { id: Math.random(), title: 'Comunidade: guia prático de como contribuir para o ecossistema de tecnologia', subtitle: 'Fazer parte de comunidades techs é uma qualidade...', likes: 15, removed: false },
    ]);
    const [theme, setTheme] = useState('dark', () => {
        const storageTheme = localStorage.getItem('theme');

        if (storageTheme) {
            return JSON.parse(storageTheme);
        }

        return '';
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    const currentTheme = useMemo(() => {
        return themes[theme] || themes.dark;
    }, [theme]);

    function handleUpdatePosts() {
        setPosts((prevState) => [...prevState, { 
                id: Math.random(), 
                title: `Título do post 0${prevState.length + 1}`,
                subtitle: `Subtítulo do post 0${prevState.length + 1}`, 
                likes: 10,
                removed: false 
            }
        ])
    }

    function handleRemovePost(postId) {
        setPosts((prevState) => prevState.map(
            post => post.id === postId 
            ? { ...post, removed: true }
            : { ...post }
        ));
    }

    function handleToggleTheme() {
        setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <Header 
                handleToggleTheme={handleToggleTheme}
                selectedTheme={theme}
            >
                <button onClick={handleUpdatePosts}>
                    🔃
                </button>
            </Header>
            {posts.length != 0 
                ? posts.map((post) => (
                    <Post 
                        key={post.id}
                        post={post}
                        onRemove={handleRemovePost}
                    />
                )) 
                : <h3>Não há posts essa semana.</h3>
            }
        </ThemeProvider>
    );
}
