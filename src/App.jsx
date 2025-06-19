import { WeatherProvider } from "./contexts/WeatherContext";

import { WeatherDisplay } from "./components/WeatherDisplay";
import { Search } from "./components/Search";
import styled from "styled-components";

function App() {
  return (
    <WeatherProvider>
      <Title>Weather App</Title>
      <Search />
      <WeatherDisplay />
    </WeatherProvider>
  );
}

export default App;

const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
`;
