import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as Discover } from "assets/icons/discover.svg";
import { ReactComponent as Library } from "assets/icons/library.svg";
import { ReactComponent as Liked } from "assets/icons/liked.svg";
import { ReactComponent as Recently } from "assets/icons/recently.svg";
import { ReactComponent as CreatePlaylist } from "assets/icons/createPlaylist.svg";
export const navigations = {
  main: [
    {
      name: "Home",
      link: "/home",
      IconComp: Home,
    },
    {
      name: "Discover",
      link: "/discover",
      IconComp: Discover,
    },
  ],
  sub: [
    {
      name: "Your Library",
      link: "/library",
      IconComp: Library,
    },
    {
      name: "Liked Songs",
      link: "/liked-songs",
      IconComp: Liked,
    },
    {
      name: "Recently Played",
      link: "/played",
      IconComp: Recently,
    },
    {
      name: "Create Playlist",
      link: "/new-playlist",
      IconComp: CreatePlaylist,
    },
  ],
  playlist: [
    {
      name: "Riffs & Runs",
      link: "/runs",
    },
    {
      name: "African Heat",
      link: "/african-heat",
    },
    {
      name: "Gidi Nights",
      link: "/gidi-nights",
    },
    {
      name: "Running out of Playlist na....",
      link: "/out-of-playlist",
    },
    {
      name: "Saturday was a Good Day",
      link: "/good-day",
    },
    {
      name: "Gidi Nights",
      link: "/gidi-nights",
    },

    {
      name: "Riffs & Runs",
      link: "/runs",
    },
    {
      name: "African Heat",
      link: "/african-heat",
    },
    {
      name: "Gidi Nights",
      link: "/gidi-nights",
    },
    {
      name: "Running out of Playlist na....",
      link: "/out-of-playlist",
    },
    {
      name: "Saturday was a Good Day",
      link: "/good-day",
    },
    {
      name: "Gidi Nights",
      link: "/gidi-nights",
    },
  ],
};

export const mobileNav = [
  {
    name: "Home",
    link: "/",
    IconComp: Home,
  },
  {
    name: "Discover",
    link: "/",
    IconComp: Discover,
  },
  {
    name: "Your Library",
    link: "/",
    IconComp: Library,
  },
  {
    name: "Create Playlist",
    link: "/",
    IconComp: CreatePlaylist,
  },
];
