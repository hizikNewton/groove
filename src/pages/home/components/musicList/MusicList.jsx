import Card from "components/card";
import { StyledMusicList } from "./styled";

export const MusicList = ({ category, musics = [] }) => {
  return (
    <StyledMusicList>
      <h3>{category}</h3>
      <div className="music-list">
        {musics.map((music, idx) => (
          <Card music={music} key={idx} />
        ))}
      </div>
    </StyledMusicList>
  );
};
