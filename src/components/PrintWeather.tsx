import React from "react";
import { WeatherData } from "../type/types";
import styled from "styled-components";

interface Props {
  weather: WeatherData | undefined;
  timezone?: string;
}

const PrintWeather = (props: Props) => {
  const { weather, timezone } = props; // 객체 분해 할당

  const timeZone = timezone || weather?.timezone;
  return (
    <Container>
      <WeatherInfo>{weather?.name}</WeatherInfo>
      <WeatherInfo>{weather?.weather[0].description}</WeatherInfo>
    </Container>
  );
};

export default PrintWeather;

const Container = styled.div``;
const WeatherInfo = styled.div``;
