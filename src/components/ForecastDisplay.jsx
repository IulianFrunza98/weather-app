import styled from "styled-components";
import { useWeather } from "../contexts/WeatherContext";

export function ForecastDisplay() {
  const { forecast } = useWeather();

  function getWeekday(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
    });
  }
  return (
    <>
      {forecast.length > 0 && (
        <ForecastContainer>
          {forecast.map((day, index) => (
            <ForecastCard key={index}>
              <p>{getWeekday(day.date)}</p>
              <p>{day.temp} °C</p>
              <p>{day.condition}</p>
            </ForecastCard>
          ))}
        </ForecastContainer>
      )}
    </>
  );
}

const ForecastContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    margin-top: 2rem;
    padding: 0 1rem;
    gap: 1rem;
  }
`;

const ForecastCard = styled.div`
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  width: 100%;
  max-width: 7rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  p:not(:last-child) {
    margin: 1rem 0;
    font-size: 0.9rem;
    font-weight: bold;
  }

  p:last-child {
    text-transform: capitalize;
    color: #555;
  }

  @media (max-width: 600px) {
    padding: 0.75rem;
    max-width: 6rem;

    p {
      font-size: 0.75rem;
    }
  }
`;
