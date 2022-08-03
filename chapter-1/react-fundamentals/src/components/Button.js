import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

export function Button({ onClick, children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <button 
            onClick={onClick}
            theme={theme}
        >
            {children}
        </button>
    );
}
