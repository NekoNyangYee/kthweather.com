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
    background: ${({ theme }: { theme: any }) => theme.boxColor};
    height: auto;
    padding: 10px;
    border: none;
    font-size: 15px;
    -webkit-border-radius: 0;
    transition: all 0.25s ease-in-out;
    border-radius:  16px 0 0 16px;
    &::placeholder {
        font-size: 15px;
      }
    &&:focus {
        outline: none;
    }
    @media screen and (max-width: 510px) {
        width: 34vh;
        font-size: 16px;
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
      height: auto;
      margin-left: auto;
      margin-right: auto;
      list-style: none;
      text-align: center;
      border-radius: 12px;
      overflow: hidden;
      background: ${({ theme }: { theme: any }) => theme.boxColor};
`;

const SearchBtn = styled.button`
    position: relative;
    top: 2px;
    height: 41px;
    padding: 10px;
    border-radius: 0 16px 16px 0;
    background: ${({ theme }: { theme: any }) => theme.textColor};
`;

const SearchIcon = styled.img`
    position: relative;
    width: 24px;
    height: 19px;
`;

const CountryList = styled.li`
    display: block;
    margin: auto;
    padding: 9px;
`;

interface Props {
    term: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
    theme: string
}

export const Search = ({ term, options, theme, onInputChange, onOptionSelect, onSubmit }: Props): JSX.Element => {

    return (
        <>
            <SearchArea>
                <TextField type='text' id="target_btn" value={term} placeholder='클릭하여 지역 검색' onChange={onInputChange} />
                <SearchBtn onClick={onSubmit}>{theme === 'light' ? <SearchIcon src="./img/search.svg" /> : <SearchIcon src="./img/search_black.svg" />}</SearchBtn>
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
