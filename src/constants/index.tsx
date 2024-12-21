import { House, Mic, Telescope } from "lucide-react";

export const sidebarLinks = [
  // {
  //   route: "/profile",
  //   label: "Profile",
  //   image: <User />,
  // },
  {
    route_name: "/",
    label: "Home",
    image: <House aria-details="home" width={24} height={24} />,
  },
  {
    route_name: "/discover",
    label: "Discover",
    image: <Telescope aria-details="discover" width={24} height={24} />,
  },
  {
    route_name: "/create-audiobud",
    label: "Create Audiobud",
    image: <Mic aria-details="create audiobud" width={24} height={24} />,
  },
];

export const voiceDetails = [
  {
    id: 1,
    name: "alloy",
  },
  {
    id: 2,
    name: "echo",
  },
  {
    id: 3,
    name: "fable",
  },
  {
    id: 4,
    name: "onyx",
  },
  {
    id: 5,
    name: "nova",
  },
  {
    id: 6,
    name: "shimmer",
  },
];

export const audioData = [
  {
    id: 1,
    title: "The meaning of life",
    description: "A long form dialogue",
    imgUrl:
      "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max%5B2",
  },
  {
    id: 2,
    title: "The meaning of love",
    description: "A long form dialogue about love",
    imgUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFydHxlbnwwfHx8fDE2Mzg1ODQ5NTI&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 3,
    title: "The meaning of peace",
    description: "A long form dialogue about peace",
    imgUrl:
      "https://images.unsplash.com/photo-1702482858444-81b00ec28c27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    title: "The meaning of health",
    description: "A long form dialogue about health",
    imgUrl: "",
  },
  {
    id: 5,
    title: "The meaning of focus",
    description: "A long form dialogue about focus",
    imgUrl:
      "https://images.unsplash.com/photo-1523476843875-43c2cb89aa85?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max%5B2",
  },
  {
    id: 6,
    title: "The meaning of desire",
    description: "A long form dialogue about desire",
    imgUrl:
      "https://images.pexels.com/photos/19670460/pexels-photo-19670460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 7,
    title: "The meaning of purpose",
    description: "A long form dialogue about purpose",
    imgUrl:
      "https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FD_KrL9oMrgjV8ZRKuN6owg%252FBanksy%2BLondon%2Bzoo.jpg&width=910",
  },
  {
    id: 8,
    title: "The meaning of war",
    description: "A long form dialogue about war",
    imgUrl:
      "https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FQE0SP8_JGXY54m79-ELsZw%252FHM_King_Charles_III_%25C2%25A9_Jonathan_Yeo.jpg&width=910",
  },
];
