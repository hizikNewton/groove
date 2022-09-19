import styled from "styled-components";
import { space } from "styles/theme";

export const StyledMusicList = styled.section`
  .music-list {
    margin-block: ${space(12)};
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    grid-column-gap: ${space(6)};
    overflow: scroll;
    scroll-snap-type: x proximity;

    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  h3 {
    margin: 0;
  }
`;
