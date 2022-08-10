import styled, { css } from 'styled-components';

export const PostContainer = styled.article`
  display: flex;
  flex-direction: column;

  padding: 10px 24px;
  border-radius: 10px;

  ${({ theme, removed }) => css`
    color: ${ theme.textColor };

    opacity: ${ removed ? 0.3 : 1 };

    button,
    input {
      &:disabled {
        cursor: not-allowed;
      }
    }
  `}
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.small}px;

`;

export const PostFooterInfo = styled.div`
  display: flex;
  align-items: center;
  
  gap: ${({ theme }) => theme.spacing.large}px;

  div {
    display: flex;
  
    gap: ${({ theme }) => theme.spacing.small}px;

    small {
      opacity: 0.7;
      font-size: ${({ theme }) => theme.spacing.medium}px;
    }
  }
`;

export const PostFooterActions = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.small}px;
`;
