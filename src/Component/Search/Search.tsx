import { ChangeEvent, useEffect, useRef, useState } from "react";
import { optionType } from "../../types/Type";
import styled from "styled-components";

const SearchArea = styled.div`
    padding: 12px;
    height: 30px;
    text-align: center;
    height: 38px;
`;

const TextField = styled.input`
    z-index: 25;
    width: 40vh;
    background: none;
    height: auto;
    padding: 12px;
    border: none;
    -webkit-border-radius: 0;
    border-bottom: 2px solid ${({ theme }: { theme: any }) => theme.textColor};
    &::placeholder {
        font-size: 15px;
      }
    @media screen and (max-width: 510px) {
        width: 25vh;
    }
    @media screen and (orientation: landscape) {
        width: 75vh;
    }
`;

const QueryList = styled.ul`
      position: relative;
      z-index: 99;
      max-width: 50vh;
      padding: 0;
      margin-left: auto;
      margin-right: auto;
      list-style: none;
      text-align: center;
      border-radius: 12px;
      background: ${({ theme }: { theme: any }) => theme.boxColor};
`;

const SearchBtn = styled.button`
    position: relative;
    top: 6px;
    margin-left: 8px;
`;

const SearchIcon = styled.img`
    position: relative;
    width: 24px;
`;

const CountryList = styled.li`
    display: block;
    margin: auto;
    padding: 9px;
`;

type Props = {
    term: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
    toggleTheme: () => void
    theme: string
}

export const Search = ({ term, options, theme, onInputChange, onOptionSelect, onSubmit, toggleTheme }: Props): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current && inputRef.current.focus()
    });

    return (
        <>
            <SearchArea>
                <TextField ref={inputRef} type='stext' id="target_btn" value={term} placeholder='클릭하여 지역 검색' onChange={onInputChange} />
                <SearchBtn onClick={onSubmit}>{theme === 'light' ? <SearchIcon src="./img/search_black.svg" /> : <SearchIcon src="./img/search.svg" />}</SearchBtn>
                <button onClick={toggleTheme} className="check">다크모드</button>
                <QueryList>
                    {options.map((option: optionType, index: number) =>
                        <CountryList key={option.name + '-' + index}>
                            <button onClick={() => onOptionSelect(option)}>{option.name}, {option.country}</button>
                        </CountryList>
                    )}
                </QueryList>
            </SearchArea>
        </>
    )
}
