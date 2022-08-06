import styled from 'styled-components';

export const StyledPostHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const Subtitle = styled.small`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.spacing.medium}px;
  opacity: 0.8;
`;
