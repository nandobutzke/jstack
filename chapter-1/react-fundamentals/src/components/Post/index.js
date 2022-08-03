import React from 'react';
import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader';
import { PostContainer, PostFooter, Subtitle } from './styles';
import { LikeButton } from './LikeButton';

export default function Post({ post, onRemove }) {
    return (
        <PostContainer removed={post.removed}>
            <PostHeader 
                post={post} 
                onRemove={onRemove} 
            />
            <PostFooter>
                <Subtitle>{post.subtitle}</Subtitle>
                <LikeButton />
            </PostFooter>
        </PostContainer>
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