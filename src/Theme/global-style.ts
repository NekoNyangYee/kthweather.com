import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Noto Sans KR', sans-serif;      
    }
    body {
        background: ${({ theme }: { theme: any }) => theme.bgColor};
        color: ${({ theme }: { theme: any }) => theme.textColor};
        max-width: 60%;
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

    @media screen and (max-width: 480px) {
        body {
            max-width: 120%;
        }
    }

    @media screen and (min-width: 851px) {
        body {
            max-width: 80%;
        }
    }

    @media screen and (min-width: 1200px) {
        body {
            max-width: 50%;
        }
    }
`;