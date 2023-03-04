import { ChangeEvent, useState } from "react";
import { optionType } from "../../types/Type";
import styled from "styled-components";

const SearchArea = styled.div`
    text-align: center;
`;

const TextField = styled.input`
    width: 250px;
    background: ${({ theme }: { theme: any }) => theme.textFieldColor};
    height: 28px;
    border: none;
    border-radius: 6px;
`;

const QueryList = styled.ul`
      list-style: none;
      text-align: center;
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
                <TextField type='search' value={term} placeholder='클릭하여 지역 검색' onChange={onInputChange} />
                <button onClick={onSubmit}>검색</button>
            </SearchArea>
            <button onClick={toggleTheme}>sssss</button>
            <QueryList>
                {options.map((option: optionType, index: number) =>
                    <li key={option.name + '-' + index}>
                        <button onClick={() => onOptionSelect(option)}>{option.name}, {option.country}</button>
                    </li>
                )}
            </QueryList>
        </>
    )
}
