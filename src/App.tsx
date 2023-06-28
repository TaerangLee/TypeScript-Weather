import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import InsertCityName from "./components/InsertCityName";
import PrintWeather from "./components/PrintWeather";
import { WeatherData } from "./type/types";
import axios from "axios";
import { ThemedStyledProps } from "styled-components";
import styled from "styled-components";
import * as I from "./assets/index";
import { Cloud } from "./assets/index";

const weatherImg: { [key: string]: string } = {
  Cloud: I.Cloud,
  Clear: I.Clear,
  Rain: I.Rain,
  Drizzle: I.Drizzle,
  Snow: I.Snow,
  Thunderstorm: I.Thunderstorm,
};

function App() {
  const [cityName, setCityName] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | undefined>();
  const [weatherName, setWeatherName] = useState("");

  const getWeather = async () => {
    const api = {
      url: "https://api.openweathermap.org/data/2.5/weather",
      api_key: "21216b991f3181c2734bade619a59238",
    };

    try {
      const res = await axios.get(
        `${api.url}?q=${cityName}&appid=${api.api_key}`
      );

      setWeather(res.data);
      setWeatherName(res.data.weather[0].main);
    } catch (error) {
      console.error("날씨 정보를 가져오는데 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    getWeather();
  }, [cityName]);

  return (
    <>
      <GlobalStyle />
      <Container img={weatherImg[weatherName]}>
        <Box>
          <ProjectTitle>WEATHER PROJECT</ProjectTitle>
          <PrintWeather weather={weather} />
          <InsertCityName setCityName={setCityName} />
        </Box>
      </Container>
    </>
  );
}

interface ContainerProps {
  img: string | undefined;
}
export default App;

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.2s ease-in;
`;
const Box = styled.div`
  width: 500px;
  height: 25vh;
  text-align: center;
  border: 3px solid white;
  border-radius: 10px;

  background-color: rgba(255, 255, 255, 0.3);
`;
const ProjectTitle = styled.h1`
  color: white;
  margin: 1rem;
`;
