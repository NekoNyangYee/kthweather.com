import React from "react";
import styled from "styled-components";

const DarkBtn = styled.button`
    background: ${({ theme }: { theme: any }) => theme.textColor};
    position: fixed;
    bottom: 0;
    padding: 15px;
    margin: 20px;
    height: 55px;
    border-radius: 50%;
`;

interface Props {
    toggleTheme: () => void
    theme: string
}

export const Button = ({ toggleTheme, theme }: Props): JSX.Element => {
    return (
        <>
            <DarkBtn onClick={toggleTheme} className="check">
                {theme === 'light' ? <img src="./img/moon.svg" /> : <img src="./img/sun.svg" />}
            </DarkBtn>
        </>
    )
}