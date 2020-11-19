import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html{
        font-size: 16px;
        box-sizing: border-box;
        scroll-behavior: smooth;        
    }

    *, *:before, *:after{
        box-sizing: inherit;
    }

    body{
        margin: 0;
        font-family: 'Roboto';
    }
`;
