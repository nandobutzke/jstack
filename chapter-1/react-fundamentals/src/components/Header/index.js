import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './Header.scss';

export default function Header(props) {
    const { handleToggleTheme } = useContext(ThemeContext);

    return (
        <header>
            <h1 className={styles.title}>JStack's Blog</h1>
            <Button onClick={() => handleToggleTheme()}>
                Alterar Tema
            </Button>
            {props.children}
        </header>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired
}