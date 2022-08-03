import React, { useState } from 'react';
import { Rate, StyledLikeButton } from './styles';

export function LikeButton() {
    const [likes, setLikes] = useState(0);

    return (
        <StyledLikeButton onClick={() => setLikes(likes + 1)}>
            <span>👍</span>
            <Rate>{likes}</Rate>
        </StyledLikeButton>
    );
}