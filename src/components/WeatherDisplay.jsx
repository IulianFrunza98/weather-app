import styled from "styled-components";
import { useWeather } from "../contexts/WeatherContext";
import { IoWaterOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { ForecastDisplay } from "./ForecastDisplay";

export function WeatherDisplay() {
  const { weather } = useWeather();
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (!weather) return null;

  return (
    <Container>
      <Header>
        <CityName>{weather.name}</CityName>
        <TodayDate>{`${day} / ${month} / ${year}`}</TodayDate>
      </Header>
      <Main>
        <Left>
          <Temperature>{weather.main.temp.toFixed(0)} °C</Temperature>
          <Condition>{weather.weather[0].description}</Condition>
        </Left>
        <Right>
          <InfoRow>
            <FaWind size={18} />
            {weather.wind.speed} mph
          </InfoRow>
          <InfoRow>
            <IoWaterOutline size={18} />
            {weather.main.humidity}%
          </InfoRow>
        </Right>
      </Main>
      <ForecastDisplay />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f7f7f7;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #222222;
  max-width: 60rem;
  margin: 2rem auto;

  @media (max-width: 600px) {
    padding: 1rem;
    margin: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

const CityName = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

const TodayDate = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Temperature = styled.p`
  margin: 0;
  font-size: 7rem;
  font-weight: 400;
  color: #555;

  @media (max-width: 600px) {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
`;

const Condition = styled.p`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: #444;
  margin: 0;
`;

const InfoRow = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #666;
  gap: 0.5rem;
  margin: 0;
`;
