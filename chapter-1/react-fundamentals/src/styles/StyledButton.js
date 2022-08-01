
import styled, { css } from 'styled-components';
import { Button } from '../components/Button';


export const StyledButton = styled.button`
    /* color: ${(props) => props.theme === 'dark' ? '#fff' : '#000'};
    background: ${(props) => props.theme === 'dark' ? '#000' : '#fff'}; */

    ${({ theme }) => css`
        color: ${ theme === 'dark' ? '#fff' : '#000' };
        background: ${ theme === 'dark' ? '#000' : '#fff'};
    `}
`;