import React, { 
    useState, 
    createContext, 
    useContext 
} from 'react';

const PostContext = createContext([]);

export function PostProvider({ children }) {
    const [posts, setPosts] = useState([
        { 
            id: Math.random(), 
            title: 'Boas práticas para devs em início de carreira', 
            subtitle: 'As principais lições e dicas compiladas para quem...', 
            date: new Date(Date.now()).toLocaleString('pt-br', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }), 
            author: 'Fernando Butzke',
            likes: 10, 
            removed: false },
        { 
            id: Math.random(), 
            title: 'Comunidade: guia prático de como contribuir para o ecossistema de tecnologia', 
            subtitle: 'Fazer parte de comunidades techs é uma qualidade...', 
            date: new Date(Date.now()).toLocaleString('pt-br', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }), 
            author: 'Fernando Butzke',
            likes: 15, 
            removed: false 
        },
    ]);

    function handleUpdatePosts() {
        setPosts((prevState) => [...prevState, { 
                id: Math.random(), 
                title: `Título do post 0${prevState.length + 1}`,
                subtitle: 'Lorem ipsum dolor sit amet, consectet...',
                date: new Date(Date.now()).toLocaleString('pt-br', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                }), 
                author: 'Fernando Butzke',
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

    return (
        <PostContext.Provider value={{ posts, handleUpdatePosts, handleRemovePost }}>
            {children}
        </PostContext.Provider>
    );
}

export function usePost() {
    const context = useContext(PostContext);

    return context;
}
