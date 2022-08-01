import React from 'react';
import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader';
import { Subtitle, Rate } from './styles';

export default function Post({ post, onRemove }) {
    return (
        <article>
            <PostHeader 
                post={post} 
                onRemove={onRemove} 
            />
            <Subtitle>{post.subtitle}</Subtitle>
            <Rate>Likes: {post.likes}</Rate>
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