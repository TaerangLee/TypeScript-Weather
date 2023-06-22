import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { WeatherData } from "./type/types";
import axios from "axios";
import styled from "styled-components";

const api = {
  url: process.env.React_APP_API_URL,
  api_key: process.env.React_APP_WEATER_APU_KEY,
};

function App() {
  const [cityName, setCityName] = useState<string>("seoul");
  const [weahter, setWeahter] = useState<WeatherData>();
  const [weatherName, setWeatherName] = useState("");

  const getWeather = async () => {
    const res = await axios.get(
      `${api.url}?q=${cityName}&appid=${api.api_key}`
    );

    setWeahter(res.data);
    setWeatherName(res.data.weather[0].main);
  };

  useEffect(() => {
    getWeather();
  }, [cityName]); // cityName이 바뀔 때 마다 getWeahter 클라이언트 렌더링

  return (
    <>
      <GlobalStyle />
      <Container>
        <Box>
          <ProjectTitle>{`WEATHER PROJECT`}</ProjectTitle>
        </Box>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div``;
const Box = styled.div``;
const ProjectTitle = styled.h1``;
