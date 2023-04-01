import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Noto Sans KR', sans-serif;      
    }
    body {
        background: ${({ theme }: { theme: any }) => theme.bgColor};
        color: ${({ theme }: { theme: any }) => theme.textColor};
        max-width: 60vh;
        display: block;
        margin: auto;
    }
    button { 
        cursor: pointer;
        border: 0;
        outline: none;
        background: ${({ theme }: { theme: any }) => theme.startBgColor};
        color: ${({ theme }: { theme: any }) => theme.textColor};
        background: none;
        font-size: 16px;
    }
    input {
        color: ${({ theme }: { theme: any }) => theme.textColor};
    } 

    @media screen and (min-width: 480px) and (max-width: 767px) {
        body {
            max-width: 120vh;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        body {
            max-width: 150vh;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        body {
            max-width: 230vh;
        }
    }

    @media screen and (min-width: 1200px) {
        body {
            max-width: 100vh;
        }
    }
`;