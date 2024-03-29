import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    body {
        font-family: sans-serif;

        ${({ theme }) => css`
            background: ${theme.backgroundColor };
            color: ${theme.textColor};
            
            hr {
                height: 0.3px;
                opacity: ${theme.hrElementOpacity};
            }
        `}
    }

    button, 
    input, 
    select, 
    textarea {
        cursor: pointer;
    }
`;
