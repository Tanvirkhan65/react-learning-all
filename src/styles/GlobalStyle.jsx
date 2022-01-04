import {
    createGlobalStyle
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @font-face {
        src:url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap');
        font-family: 'Montserrat', sans-serif;
    }
}
`;
export default GlobalStyle;
