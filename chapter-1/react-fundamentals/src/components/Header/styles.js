import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
`;

export const HeaderTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 5px 20px;
    background: ${({ theme }) => theme.headerBackgroundColor };
    color: ${({ theme }) => theme.textColor };
    border-radius: 10px;

    button {
        background: none;
        border: none;
        font-size: ${({ theme }) => theme.spacing.large }px;
    }
`;

export const SubtitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 20px;
`;