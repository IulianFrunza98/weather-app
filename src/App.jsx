import { WeatherProvider } from "./contexts/WeatherContext";

import { WeatherDisplay } from "./components/WeatherDisplay";
import { Search } from "./components/Search";

function App() {
  return (
    <WeatherProvider>
      <Search />
      <WeatherDisplay />
    </WeatherProvider>
  );
}

export default App;
