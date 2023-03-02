import { useForecast } from "./Component/Hooks/useForecast";
import { Search } from "./Component/Search/Search";
import { Forecast } from "./Component/Forecast";

function App(): JSX.Element {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } = useForecast()
  return (
    <>
      <Search
        term={term}
        options={options}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit} />
      {forecast ? <Forecast data={forecast} /> : (null)}

    </>
  );
}

export default App;
