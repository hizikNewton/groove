import React from "react";
import styled from "styled-components";
import { space } from "styles/theme";
import Header from "./components/header";
import MusicList from "./components/musicList";
import { MusicData } from "./musicData";

const MusicWrapper = styled.div`
  padding: ${space(8)};
  z-index: 1;
`;

export const Home = () => {
  return (
    <>
      <Header />
      <MusicWrapper>
        {MusicData.map(({ category, musics }) => (
          <MusicList category={category} musics={musics} key={category} />
        ))}
      </MusicWrapper>
    </>
  );
};
