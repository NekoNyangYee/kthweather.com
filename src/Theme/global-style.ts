import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Noto Sans KR', sans-serif;
    }
    body {
        background: ${({ theme }: { theme: any }) => theme.bgColor};
        transition: all 0.25s ease-in-out;
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
        transition: all 0.25s ease-in-out;
    }
    input {
        transition: all 0.25s ease-in-out;
        color: ${({ theme }: { theme: any }) => theme.textColor};
    } 

    @media screen and (max-width: 480px) {
        body {
            max-width: 10vh;
        }
    }

    @media screen and (max-width: 769px) {
        body {
            max-width: 100vh;
        }
    }

    @media screen and (min-width: 900px) {
        body {
            max-width: 100vh;
        }
    }

    @media screen and (max-width: 950px) {
        body {
            max-width: 150vh;
        }
    }

   
`;