import { createGlobalStyle } from 'styled-components';
import { normalize, fontFace } from 'polished';
// import { primaryFont } from './typography';
import Roboto from '../../fonts/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${fontFace({
		fontFamily: 'Roboto',
		fontFilePath: Roboto,
	})}
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
        font-family: Roboto;
    }
`;
