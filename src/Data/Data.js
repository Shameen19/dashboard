// Sidebar imports
import {
  UilEstate,
  UilCardAtm,
  UilAnalysis,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/image4.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilCardAtm,
    heading: "Pricing Plan",
  },
  {
    icon: UilAnalysis,
    heading: "Analysis",
  },
];

// Analytics Cards Data

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    credits: "$100",
  },
];
