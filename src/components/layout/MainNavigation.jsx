import Divider from "components/divider";
import Icon from "components/icon";
import { matchPath, NavLink } from "react-router-dom";
import { mobileNav, navigations } from "./navigations";
import { ReactComponent as Records } from "assets/icons/records.svg";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as Sound } from "assets/icons/sound.svg";
import {
  Avatar,
  MobileNavigation,
  Nav,
  NavContainer,
  NavHeader,
  NavList,
  NavListItem,
} from "./styled";
import { useLocation } from "react-router-dom/dist";

const MainNavigation = () => {
  const { main, sub, playlist } = navigations;
  const { pathname } = useLocation();

  return (
    <NavContainer>
      <NavHeader>
        <Avatar />
        <div>{"Hey Aleem"}</div>
      </NavHeader>
      <Nav>
        <NavList>
          {main.map(({ name, link, IconComp }, idx) => (
            <NavListItem key={`${name}-${idx}`}>
              <Icon IconComp={IconComp} />
              <NavLink
                to={link}
                className={(navData) => (navData.isActive ? "active-link" : "")}
              >
                {name}
              </NavLink>

              {!!matchPath(pathname, link) && <Icon IconComp={Sound} />}
            </NavListItem>
          ))}
          <Divider />
          {sub.map(({ name, link, IconComp }, idx) => (
            <NavListItem key={`${name}-${idx}`}>
              <Icon IconComp={IconComp} />
              <NavLink
                to={link}
                className={(navData) => (navData.isActive ? "active-link" : "")}
              >
                {name}
              </NavLink>
              {!!matchPath(pathname, link) && <Icon IconComp={Sound} />}
            </NavListItem>
          ))}
          <div>
            <li className="myPlaylist">
              <span>
                <Icon IconComp={Records} />
                <span className="text">{"My Playlists"}</span>
              </span>
              <button>
                <Icon IconComp={Search} />
              </button>
            </li>
            <Divider />
          </div>
          {playlist.map(({ name, link }, idx) => (
            <NavListItem className="playlist" key={`${name}-${idx}`}>
              <NavLink
                to={link}
                className={(navData) => (navData.isActive ? "active-link" : "")}
              >
                {name}
              </NavLink>
            </NavListItem>
          ))}
        </NavList>
      </Nav>
      <MobileNavigation>
        {mobileNav.map(({ IconComp, link }, idx) => {
          return (
            <NavLink
              key={idx}
              to={link}
              className={(navData) => (navData.isActive ? "active-link" : "")}
            >
              <Icon IconComp={IconComp} />
            </NavLink>
          );
        })}
      </MobileNavigation>
    </NavContainer>
  );
};

export default MainNavigation;
