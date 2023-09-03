"use client";
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
    </>
  );
};

export default Home;