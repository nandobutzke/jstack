import styled, { css } from 'styled-components';

export const StyledPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;

  strong {
    font-size: 20px;
  }
`;

export const PostContainer = styled.article`
    margin-top: 24px;

    padding: 10px 20px;
    border-radius: 10px;

    ${({ theme, removed }) => css`
      background: ${ theme.postBackgroundColor};
      color: ${ theme.textColor };

      opacity: ${ removed ? 0.3 : 1 };
      cursor: ${ removed ? 'not-allowed' : 'auto' };
    `}


`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const Subtitle = styled.small`
`;

export const Rate = styled.span`
    opacity: 0.7;
`;

export const StyledLikeButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 10px;

  background: rgba(25, 171, 255, 0.3);

  border: 1px solid #19abff;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.textColor };

  border-radius: 10px;

  span {
    opacity: 1;
  }

`;