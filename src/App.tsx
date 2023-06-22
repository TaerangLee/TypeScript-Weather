import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import InsertCityName from "./components/InsertCityName";
import PrintWeather from "./components/PrintWeather";
import { WeatherData } from "./type/types";
import axios from "axios";
import styled from "styled-components";

const api = {
  url: "https://api.openweathermap.org/data/2.5/weather",
  api_key: "21216b991f3181c2734bade619a59238",
};

function App() {
  const [cityName, setCityName] = useState<string>("seoul");
  const [weather, setWeahter] = useState<WeatherData>();
  const [weatherName, setWeatherName] = useState("");

  const getWeather = async () => {
    const res = await axios.get(
      `${api.url}?q=${cityName}&appid=${api.api_key}`
    );

    setWeahter(res.data);
    setWeatherName(res.data.weather[0].main);
  };

  console.log(weather);

  useEffect(() => {
    getWeather();
  }, [cityName]); // cityName이 바뀔 때 마다 getWeahter 클라이언트 렌더링

  return (
    <>
      <GlobalStyle />
      <Container>
        <Box>
          <ProjectTitle>{`WEATHER PROJECT`}</ProjectTitle>
          <InsertCityName />
          <PrintWeather />
        </Box>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div``;
const Box = styled.div``;
const ProjectTitle = styled.h1``;
