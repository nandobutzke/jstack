import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { ThemeContext } from './ThemeContext';

export default function Header(props) {
    const { handleToggleTheme } = useContext(ThemeContext);

    return (
        <>
            <h1>JStack's Blog</h1><Button onClick={() => handleToggleTheme()}>Alterar Tema</Button>
            {props.children}
        </>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired
}