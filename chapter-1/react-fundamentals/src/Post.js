import React from 'react';
import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader';

export default function Post({ post, onRemove }) {
    return (
        <>
            <article>
                <PostHeader post={post} onRemove={onRemove} />
                    <br />
                <small>{post.subtitle}</small>
                    <br />
                <small>Likes: {post.likes}</small>
            </article>
            <br />
        </>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired
    }),
    onRemove: PropTypes.func.isRequired,
}