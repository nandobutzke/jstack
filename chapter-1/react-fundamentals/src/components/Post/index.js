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
                            <span>
                                {new Date(Date.now()).toLocaleString('pt-br', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </span>
                        </div>
                        <div>
                            <FaUserAlt />
                            <span>Fernando Butzke</span>
                        </div>
                    </PostFooterInfo>
                    <PostFooterActions>
                        <LikeButton disabled={post.removed} />
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