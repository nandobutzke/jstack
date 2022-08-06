import styled, { css } from 'styled-components';

export const Title = styled.h1`
    font-family: sans-serif;

    display: flex;
    align-items: center;

    ${({ theme }) => css`
      gap: ${theme.spacing.medium}px;

      font-size: ${theme.spacing.large}px;

      input[type="checkbox"] {   
        height: ${theme.spacing.large}px;
        width: ${theme.spacing.large}px;
      }
    `}

`;