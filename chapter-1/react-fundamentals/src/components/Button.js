import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { StyledButton } from '../styles/StyledButton';

export function Button({ onClick, children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <StyledButton 
            onClick={onClick}
            theme={theme}
        >
            {children}
        </StyledButton>
    );
}
