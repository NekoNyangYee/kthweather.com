import { ChangeEvent } from "react";
import { optionType } from "../../types/Type";
import styled from "styled-components";

const SearchArea = styled.div`
    padding: 10px;
    width: 100%;
    height: 30px;
    text-align: center;
`;

const TextField = styled.input`
    width: 25vh;
    background: ${({ theme }: { theme: any }) => theme.textFieldColor};
    height: 28px;
    border: none;
    border-radius: 6px;
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
}

export const Search = ({ term, options, onInputChange, onOptionSelect, onSubmit, toggleTheme }: Props): JSX.Element => {
    return (
        <>
            <SearchArea>
                <TextField type='search' id="input" value={term} placeholder='클릭하여 지역 검색' onChange={onInputChange} />
                <button onClick={onSubmit}>검색</button>
                <button onClick={toggleTheme}>다크모드</button>
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
