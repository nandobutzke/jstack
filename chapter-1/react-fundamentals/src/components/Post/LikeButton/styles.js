import styled, { css } from 'styled-components';

export const StyledLikeButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 10px;
  
  background: rgba(25, 171, 255, 0.3);
  
  border: 1px solid #19abff;
  padding: 0.5rem 1rem;

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
