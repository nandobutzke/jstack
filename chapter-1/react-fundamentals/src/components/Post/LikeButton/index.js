import React, { useState } from 'react';

import { Rate } from './styles';
import { FaThumbsUp } from 'react-icons/fa';
import { Button } from '../../Button';

export function LikeButton({ isDisabled }) {
    const [likes, setLikes] = useState(0);
    
    function handleLikePost() {
        setLikes((prevState) => prevState + 1);
    }

    return (
        <Button 
            onClick={handleLikePost} 
            disabled={isDisabled}
        >
            <FaThumbsUp />
            {likes != 0 && <Rate>{likes}</Rate>}
        </Button>
    );
}
