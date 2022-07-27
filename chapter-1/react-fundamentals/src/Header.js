import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
    return (
        <>
            <h1>JStack's Blog</h1>
            {props.children}
        </>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired
}