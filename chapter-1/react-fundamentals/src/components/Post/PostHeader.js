import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export function PostHeader({ post, onRemove }) {
    const [isRead, setIsRead] = useState(false);

    return (
        <>
            <strong>
                <input 
                    type="checkbox" 
                    onClick={() => 
                        setIsRead((prevState) => !prevState)
                    } 
                />
                {isRead ? <s>{post.title}</s> : post.title}
            </strong>
            <Button onClick={() => onRemove(post.id)}>
                Remover
            </Button>
        </>
    );
}

PostHeader.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
}