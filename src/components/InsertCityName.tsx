import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

const InsertCityName = ({ setCityName }: Props) => {
  const [city, setCity] = useState("seoul");

  const changeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const clickChangeCity = () => {
    setCityName(city);

    setCity("");
  };
  return (
    <Container>
      <InputCityName type="text" onChange={changeCity} value={city} />
      <SearchButton onClick={clickChangeCity}>{`날씨 보기`}</SearchButton>
    </Container>
  );
};

export default InsertCityName;

const Container = styled.div``;
const InputCityName = styled.input``;
const SearchButton = styled.button``;
