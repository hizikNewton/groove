import React from "react";
import {
  Artiste,
  CardContainer,
  CardContent,
  CardInfo,
  PhotoContainer,
  PhotoFrame,
  Title,
} from "./styled";

const Card = ({ music }) => {
  const { colorGrad1, colorGrad2, title, artiste, CoverImg } = music;
  return (
    <CardContainer>
      <CardContent className="cardContent">
        <PhotoContainer grad2={colorGrad2} className={"photoContainer"}>
          <PhotoFrame>
            <img src={CoverImg} alt={"cover"} />
          </PhotoFrame>
        </PhotoContainer>
        <CardInfo className={"cardInfo"} grad1={colorGrad1}>
          <Title>{title}</Title>
          <Artiste>{artiste}</Artiste>
        </CardInfo>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
