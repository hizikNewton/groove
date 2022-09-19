import styled from "styled-components";
import background from "assets/images/background.svg";

import mobileBackground from "assets/images/mobile-background.svg";
import { space, textFont } from "styles/theme";

export const NavHeader = styled.header`
  padding: ${space(4, 8)};
  background: #0f0f0f;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  margin-right: ${space(5)};
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-color: #70707026;
`;

export const Nav = styled.nav`
  padding: ${space(8)};
  overflow-y: scroll;
  height: 100vh;
  .playlist a {
    ${textFont("md", "medium")}
  }
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    margin-top: 10px;
    margin-bottom: calc(100vh - 127px);
  }

  ::-webkit-scrollbar-thumb {
    background: #fbba12;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavList = styled.ul`
  li.myPlaylist {
    padding-block: ${space(4)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    span svg {
      margin-right: ${space(3)};
      vertical-align: middle;
    }
  }
`;
export const NavListItem = styled.li`
  padding-block-end: ${space(4)};
  :hover {
    a {
      color: #fbba12;
    }
    svg {
      fill: #fbba12;
    }
  }
  svg {
    margin-right: ${space(3)};
    vertical-align: middle;
  }
  a {
    text-decoration: none;
    margin-right: ${space(4)};
  }
  a.active-link {
    color: #fbba12;
    svg {
      fill: #fbba12;
    }
  }
`;

export const MobileNavigation = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 84px;
    width: 100vw;
    z-index: 2;
    bottom: 0;
    background: #000;
    background-image: url(${mobileBackground});
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
