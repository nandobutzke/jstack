import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer,  } from './styles';

export default function Header({ selectedTheme, handleToggleTheme, children }) {
    return (
        <HeaderContainer>
            <h1>JStack's Blog</h1>
            <div>
                {children}
                <button onClick={handleToggleTheme}>
                    {selectedTheme === 'dark' ? '🌞' : '🌚'}
                </button>
            </div>
        </HeaderContainer>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired
}
