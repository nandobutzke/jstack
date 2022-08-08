import React, { useState } from 'react';

import { Rate, StyledLikeButton } from './styles';
import { FaThumbsUp } from 'react-icons/fa';

export function LikeButton({ isDisabled }) {
    const [likes, setLikes] = useState(0);
    
    function handleLikePost() {
        setLikes((prevState) => prevState + 1);
    }

    return (
        <StyledLikeButton 
            onClick={handleLikePost} 
            disabled={isDisabled}
        >
            <FaThumbsUp />
            {likes != 0 && <Rate>{likes}</Rate>}
        </StyledLikeButton>
    );
}
