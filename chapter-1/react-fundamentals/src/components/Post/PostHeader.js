import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { StyledPostHeader } from './styles';

export function PostHeader({ post, onRemove }) {
    const [isRead, setIsRead] = useState(false);

    return (
        <StyledPostHeader>
            <strong>
                <input 
                    type="checkbox"
                    title="Marcar como lido" 
                    onClick={() => 
                        setIsRead((prevState) => !prevState)
                    } 
                />
                {isRead ? <s>{post.title}</s> : post.title}
            </strong>
            <Button onClick={() => onRemove(post.id)}>
                Remover
            </Button>
        </StyledPostHeader>
    );
}

PostHeader.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
}