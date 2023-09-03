import React from "react";
import { Input, Text } from "./UI";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar } from "@mui/material";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav className="sticky w-full px-10 z-30 flex ">
      <ul className="navLinks flex gap-2 -z-10 cursor-pointer flex-grow">
        <li>
          <Text variant="titleXl" className="md:inline-block hidden max-w-max">
            Dashboard
          </Text>
        </li>
      </ul>
      <ul className="navLinks flex gap-x-6">
        <li className="md:flex hidden items-center gap-1 relative">
          <Input
            variant="image"
            placeholder="Search..."
            className="block w-full rounded-md  py-1.5 text-primary bg-white  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttonSecondary sm:text-sm sm:leading-6"
          />
          <SearchOutlinedIcon fontSize="small" />
        </li>
        <li className="group flex relative items-center">
          <NotificationsNoneIcon
            className="group-hover:text-hoverPrimary"
            fontSize="medium"
          />
        </li>
        <Avatar alt="Deepak Singh" src="../../public/assets/icons/Logo.jsx" />
      </ul>
    </nav>
  );
}
