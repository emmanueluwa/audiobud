import { House, Telescope, User } from "lucide-react";

export const sidebarLinks = [
  {
    route: "/profile",
    label: "Profile",
    image: <User />,
  },
  {
    route: "/home",
    label: "Home",
    image: <House />,
  },
  {
    route: "/discover",
    label: "Discover",
    image: <Telescope />,
  },
];
