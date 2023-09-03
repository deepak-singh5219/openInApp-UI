"use client";

import Capsules from "@/components/Capsules";
import { Text } from "@/components/UI";
import { SidebarContext } from "@/context/SidebarContext";
import { FC } from "react";
import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';



interface pageProps {}

const Home: FC<pageProps> = ({}) => {
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  return (
    <>
    <div>
    <MenuIcon onClick={toggleSidebar} className={`${!isOpen?"text-gray-200":"text-gray-800"} absolute md:hidden cursor-pointer left-4 top-4`}/>
      </div>
      <div className="flex gap-x-10 mt-10">
        <Capsules />
        <Capsules />
        <Capsules />
      </div>
    </>
  );
};

export default Home;
