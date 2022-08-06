import React, { useState } from 'react';
import { Rate, StyledLikeButton } from './styles';
import { FaThumbsUp } from 'react-icons/fa';

export function LikeButton({ disabled }) {
    const [likes, setLikes] = useState(0);

    return (
        <StyledLikeButton onClick={() => setLikes(likes + 1)} disabled={disabled}>
            <FaThumbsUp />
            <Rate>{likes}</Rate>
        </StyledLikeButton>
    );
}
