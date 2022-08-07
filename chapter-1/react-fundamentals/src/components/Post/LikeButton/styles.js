import styled, { css } from 'styled-components';

export const StyledLikeButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 10px;
  padding: 0.5rem 1rem;
  
  background: #1113;
  border: #111 1px solid;


  ${({ theme }) => css`
    font-size: ${theme.spacing.medium}px;

    color: ${theme.textColor };
    border-radius: ${theme.borderRadius};

    svg {
        color: #ffe000;
    }
  `}
`;

export const Rate = styled.span`
    opacity: 0.7;
`;
