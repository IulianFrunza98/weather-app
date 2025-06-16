import { useWeather } from "../contexts/WeatherContext";
import styled from "styled-components";

export function Search() {
  const { cityInput, setCityInput, handleSearch, error } = useWeather();

  return (
    <>
      <Form onSubmit={handleSearch}>
        <Input
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          type="text"
          placeholder="Enter city"
        />
        <Button>Search</Button>
      </Form>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  );
}

const Form = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  border-radius: 0.3rem;
  font-size: 1rem;
  color: #3c3c3c;
  width: 100%;
  max-width: 15rem;

  &:focus {
    outline: none;
    border-color: #999;
  }
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  background-color: #3c3c3c;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #222;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 600;
`;
