import React, { useState } from 'react';
import Post from './Post';
import Header from './Header';
import { ThemeProvider } from './ThemeContext';
import { Button } from './Button';

export function App() {
    const [posts, setPosts] = useState([
        { id: Math.random(), title: 'Título do post 01', subtitle: 'Subtítulo do post 01', likes: 10, removed: false },
        { id: Math.random(), title: 'Título do post 02', subtitle: 'Subtítulo do post 02', likes: 15, removed: false },
        { id: Math.random(), title: 'Título do post 03', subtitle: 'Subtítulo do post 03', likes: 20, removed: false },
    ]);

    console.log(posts);

    function handleUpdatePosts() {
        setPosts((prevState) => [...prevState, { 
                id: Math.random(), 
                title: `Título do post 0${prevState.length + 1}`, 
                subtitle: `Subtítulo do post 0${prevState.length + 1}`, 
                likes: 10,
                read: false 
            }
        ])
    }

    function handleRemovePost(postId) {
        setPosts((prevState) => prevState.map(
            post => post.id === postId 
            ? { ...post, removed: true }
            : { ...post }
        ));
        console.log(posts)
    }

    return (
        <ThemeProvider>
            <Header>
                <h2>Posts da semana</h2>
                <Button onClick={handleUpdatePosts}>Atualizar</Button>
            </Header>

            <hr />

            {
                posts.length != 0 
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