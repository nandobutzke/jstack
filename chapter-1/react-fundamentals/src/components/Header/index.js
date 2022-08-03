import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, HeaderTitleContainer, SubtitleContainer } from './styles';

export default function Header({ selectedTheme, handleToggleTheme, children }) {
    return (
        <HeaderContainer>
            <HeaderTitleContainer>
                <h1>JStack's Blog</h1>
                <button onClick={handleToggleTheme}>
                    {selectedTheme === 'dark' ? '🌞' : '🌚'}
                </button>
            </HeaderTitleContainer>
            <SubtitleContainer>
                {children}
            </SubtitleContainer>
        </HeaderContainer>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired
}