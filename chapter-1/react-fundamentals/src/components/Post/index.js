import React from 'react';
import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader';
import { LikeButton } from './LikeButton'
import { PostContainer, PostFooter, PostFooterInfo, PostFooterActions, DeleteButton } from './styles';
import { FaTrashAlt, FaStopwatch, FaUserAlt } from 'react-icons/fa';

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
                                {new Date(Date.now()).toLocaleString('pt-br', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </small>
                        </div>
                        <div>
                            <FaUserAlt />
                            <small>Fernando Butzke</small>
                        </div>
                    </PostFooterInfo>
                    <PostFooterActions>
                        <LikeButton isDisabled={post.removed} />
                        <DeleteButton onClick={() => onRemove(post.id)} disabled={post.removed}>
                            <FaTrashAlt />
                        </DeleteButton>
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
        likes: PropTypes.number.isRequired,
        removed: PropTypes.bool.isRequired
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
}