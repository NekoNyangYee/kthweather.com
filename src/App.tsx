import { useForecast } from "./Component/Hooks/useForecast";
import { Search } from "./Component/Search/Search";
import { Forecast } from "./Component/Forecast";
import { useCallback, useLayoutEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme/Theme";
import { GlobalStyle } from "./Theme/global-style";

function App(): JSX.Element {
  const { term, theme, setTheme, options, forecast, onInputChange, onOptionSelect, onSubmit, toggleTheme } = useForecast()
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
          toggleTheme={toggleTheme} />
        {forecast ? <Forecast data={forecast} /> : ('현재 날씨를 알아보세요')}
      </ThemeProvider>
    </>
  );
}

export default App;
