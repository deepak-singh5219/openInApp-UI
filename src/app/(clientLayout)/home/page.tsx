"use client";
import { SidebarContext } from "../../../context/SidebarContext"
import { FC } from "react";
import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Capsules from "../../../components/Capsules";
import { Text } from "../../../components/UI";
import NavBar from "@/components/NavBar";
import BarChart from "@/components/Charts/BarChart"



interface pageProps {}

const Home: FC<pageProps> = ({}) => {
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  return (
    <>
    <MenuIcon onClick={toggleSidebar} className={`${!isOpen?"text-gray-200":"text-gray-800"} absolute md:hidden cursor-pointer left-4 top-4`}/>
     {/* <NavBar/> */}

      <div className="flex w-full flex-wrap items-center justify-between">
        <Capsules />
        <Capsules />
        <Capsules />
        <Capsules />
      </div>

      <div className="w-full h-72 border-gray-200 border-2 rounded-lg my-4 border-gray-200 shadow-lg ">
        <BarChart/>
      </div>
      <div className="w-full flex items-center justify-between h-72 my-4">
        <div className="rounded-xl  border-2 shadow-lg border-gray-200 w-[45%] h-full"></div>
        <div className="rounded-xl border-2 shadow-lg border-gray-200 w-[45%] h-full"></div>
      </div>


    </>
  );
};

export default Home;
