import React from 'react';
import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader';
import { LikeButton } from './LikeButton'
import { PostContainer, PostFooter, PostFooterInfo, PostFooterActions } from './styles';
import { FaTrashAlt, FaStopwatch, FaUserAlt } from 'react-icons/fa';
import { Button } from '../Button';

export default function Post({ post, onRemove }) {
    return (
        <>
            <PostContainer removed={post.removed}>
                <PostHeader 
                    post={post}
                />
                <PostFooter>
                    <PostFooterInfo>
                        <div>
                            <FaStopwatch />
                            <small>
                                {post.date}
                            </small>
                        </div>
                        <div>
                            <FaUserAlt />
                            <small>{post.author}</small>
                        </div>
                    </PostFooterInfo>
                    <PostFooterActions>
                        <LikeButton isDisabled={post.removed} />
                        <Button onClick={() => onRemove(post.id)} disabled={post.removed}>
                            <FaTrashAlt />
                        </Button>
                    </PostFooterActions>
                </PostFooter>
            </PostContainer>
            <hr />
        </>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        removed: PropTypes.bool.isRequired
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
}