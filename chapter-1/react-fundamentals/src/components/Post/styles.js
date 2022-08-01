import styled from 'styled-components';

export const PostContainer = styled.article`
    margin-bottom: 24px;

    opacity: ${({ removed }) => removed === true ? 0.3 : 1};
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
    opacity: 0.7;
`;