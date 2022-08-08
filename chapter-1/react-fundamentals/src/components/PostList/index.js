import React from 'react';
import { usePost } from '../../hooks/usePost';
import Post from '../Post';

export function PostList() {
    const { posts, handleRemovePost } = usePost();

    return (
        <>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    post={post}
                    onRemove={handleRemovePost}
                />
            ))}
        </>
    );
}