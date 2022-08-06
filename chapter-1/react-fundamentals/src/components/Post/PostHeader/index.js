import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledPostHeader, Subtitle } from './styles';
import { Title } from '../../../styles/Title';

export function PostHeader({ post }) {
    const [isRead, setIsRead] = useState(false);

    return (
        <>
            <StyledPostHeader>
                <Title>
                    <input 
                        type="checkbox"
                        title="Marcar como lido"
                        disabled={post.removed} 
                        onClick={() => 
                            setIsRead((prevState) => !prevState)
                        } 
                    />
                    {isRead ? <s>{post.title}</s> : post.title}
                </Title>
                <Subtitle>{post.subtitle}</Subtitle>
            </StyledPostHeader>
        </>
    );
}

PostHeader.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
}