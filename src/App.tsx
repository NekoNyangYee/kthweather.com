import { useForecast } from "./Component/Hooks/useForecast";
import { Search } from "./Component/Search/Search";
import { Forecast } from "./Component/Forecast";
import { useLayoutEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme/Theme";
import { GlobalStyle } from "./Theme/global-style";
import { Button } from "./Component/ToggleButton/Button";

const MainInfo = styled.div`
  position: relative;
  text-align: center;
  top: 30vh;
  margin: 0;
  font-weight: bold;
  color: #ACACAC;
`;

function App(): JSX.Element {
  const { term, theme, setTheme, options, forecast, onInputChange, onOptionSelect, onSubmit, toggleTheme } = useForecast();
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      return setTheme(savedTheme);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
          theme={theme}
        />
        {forecast ? <Forecast data={forecast} /> : (
          <MainInfo>
            <img src="./img/Icon.png" />
            <p>원하는 지역의 날씨를 검색하세요!</p>
          </MainInfo>
        )}
        <Button
          toggleTheme={toggleTheme}
          theme={theme}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
