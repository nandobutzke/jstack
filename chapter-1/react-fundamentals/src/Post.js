import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Post({ post, onRemove }) {
    const [isRead, setIsRead] = useState(false);

    return (
        <>
            <article>
                <strong>
                    <input type="checkbox" onClick={() => setIsRead((prevState) => !prevState)} />{isRead ? <s>{post.title}</s> : post.title}
                </strong>
                <br />
                <small>{post.subtitle}</small>
                <button onClick={() => onRemove(post.id)}>Remover</button>
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