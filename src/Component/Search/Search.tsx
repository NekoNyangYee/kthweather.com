import { ChangeEvent } from "react";
import { optionType } from "../../types/Type";
import styled from "styled-components";

const SearchArea = styled.div`
    text-align: center;
`;

const TextField = styled.input`
    background: gray;
`;

type Props = {
    term: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
}

export const Search = ({ term, options, onInputChange, onOptionSelect, onSubmit }: Props): JSX.Element => {

    return (
        <>
            <SearchArea>
                <TextField type='search' value={term} placeholder='클릭하여 지역 검색' onChange={onInputChange} />
                <button onClick={onSubmit}>검색</button>
            </SearchArea>
            <ul>
                {options.map((option: optionType, index: number) =>
                    <li key={option.name + '-' + index}>
                        <button onClick={() => onOptionSelect(option)}>{option.name}, {option.country}</button>
                    </li>
                )}
            </ul>
        </>
    )
}
