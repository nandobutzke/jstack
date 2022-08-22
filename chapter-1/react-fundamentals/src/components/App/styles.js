import styled from 'styled-components';

export const Nav = styled.nav`
    display: inline-block;

    background: #111;
    
    padding: 18px;
    margin-top: 24px;

    border-radius: 5px;

    a {
        color: #fff;

        text-decoration: none;

        & + a {
            margin-left: 8px;
        }
    }

`;