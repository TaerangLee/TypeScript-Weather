import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

interface Props {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

const InsertCityName = ({ setCityName }: Props) => {
  const [city, setCity] = useState("seoul");

  const changeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const clickChangeCity = async () => {
    if (city) {
      const api = {
        url: "https://api.openweathermap.org/data/2.5/weather",
        api_key: "21216b991f3181c2734bade619a59238",
      };

      try {
        const res = await axios.get(
          `${api.url}?q=${city}&appid=${api.api_key}`
        );

        if (res.status === 200) {
          setCityName(city);
          setCity("");
        } else {
          alert("없는 도시입니다.");
        }
      } catch (error) {
        alert("서버에 오류가 발생했습니다.");
      }
    } else {
      alert("도시를 입력하세요.");
    }
  };

  return (
    <Container>
      <InputCityName type="text" onChange={changeCity} value={city} />
      <SearchButton onClick={clickChangeCity}>날씨 보기</SearchButton>
    </Container>
  );
};

export default InsertCityName;

const Container = styled.div``;
const InputCityName = styled.input``;
const SearchButton = styled.button``;
