import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    ${({ theme }) => css`
        padding: 5px ${theme.spacing.large}px;

        background: ${theme.headerBackgroundColor };
        color: ${theme.textColor};
        border-radius: 10px;

        button {
            background: none;
            border: none;
            font-size: ${theme.spacing.large}px;
        }
    `};

`;
