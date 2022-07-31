import React from 'react';
import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader';

import styles from './Post.scss';

export default function Post({ post, onRemove }) {
    return (
        <article className={
            post.removed === true 
            ? styles.disabled 
            : styles.post
        }>
            <PostHeader 
                post={post} 
                onRemove={onRemove} 
            />
                <br />
            <small>{post.subtitle}</small>
                <br />
            <small>Likes: {post.likes}</small>
        </article>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        removed: PropTypes.bool.isRequired
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
}