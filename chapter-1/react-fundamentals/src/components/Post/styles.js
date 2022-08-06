import styled, { css } from 'styled-components';

export const PostContainer = styled.article`
  display: flex;
  flex-direction: column;

  margin-top: 24px;

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

export const PostFooterActions = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.small}px;


`;

export const DeleteButton = styled.button`
    background: #f003;
    border: #f00 1px solid;

    display: flex;
    align-items: center;
    
    gap: 10px;
    
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.spacing.medium}px;

    ${({ theme }) => css`
      color: ${theme.textColor};
      border-radius: ${theme.borderRadius};

      svg {
        color: ${theme.textColor};
      }
    `}
`;
