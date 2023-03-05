import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }: { theme: any }) => theme.bgColor};
        transition: all 0.25s linear;
        color: ${({ theme }: { theme: any }) => theme.textColor};
    }
    button { 
        cursor: pointer;
        border: 0;
        outline: none;
        background: ${({ theme }: { theme: any }) => theme.startBgColor};
        color: ${({ theme }: { theme: any }) => theme.textColor};
        background: none;
        font-size: 16px;
        transition: all .25s;
    }
    input {
        transition: all 0.25s linear;
        color: ${({ theme }: { theme: any }) => theme.textColor};
    }
`;