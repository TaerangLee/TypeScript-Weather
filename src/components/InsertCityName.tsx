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
        api_key: "21216b991f3181c2734badexxxxxxxxx",
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
      <InputCityName
        placeholder="나라, 도시를 입력하세요. "
        type="text"
        onChange={changeCity}
        value={city}
      />
      <SearchButton onClick={clickChangeCity}>날씨 보기</SearchButton>
    </Container>
  );
};

export default InsertCityName;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  right: 30px;
  height: 40px;
  margin-top: 30px;
`;
const InputCityName = styled.input`
  border: none;
  border-radius: 10px;
  font-size: 20px;
  margin-left: 50px;
  text-indent: 10px;
  outline: none;

  &::placeholder {
    font-size: 15px;
    position: relative;
    bottom: 2px;
  }
`;
const SearchButton = styled.button`
  background-color: #81d1ff;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  margin-left: 50px;
  font-weight: bold;

  &:hover {
    transform: translateY(-5px);
  }
`;
