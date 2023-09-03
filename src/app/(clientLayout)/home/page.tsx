"use client";


import { SidebarContext } from "../../../context/SidebarContext"
import { FC } from "react";
import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Capsules from "../../../components/Capsules";
import { Text } from "../../../components/UI";
import NavBar from "@/components/NavBar";
import BarChart from "@/components/Charts/BarChart"
import MobileChart from "../../../components/Charts/MobileChart";






interface pageProps {}

const Home: FC<pageProps> = ({}) => {
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const data = [
    { "year": 2010, "new_recruits": 120, "resignations": 30 },
    { "year": 2011, "new_recruits": 110, "resignations": 25 },
    { "year": 2012, "new_recruits": 80, "resignations": 35 },
    { "year": 2013, "new_recruits": 90, "resignations": 40 },
    // { "year": 2014, "new_recruits": 180, "resignations": 38 },
    // { "year": 2015, "new_recruits": 200, "resignations": 45 },
    // { "year": 2016, "new_recruits": 220, "resignations": 50 },
    // { "year": 2017, "new_recruits": 250, "resignations": 55 },
    // { "year": 2018, "new_recruits": 280, "resignations": 60 },
    // { "year": 2019, "new_recruits": 300, "resignations": 65 },
    // { "year": 2020, "new_recruits": 320, "resignations": 70 },
    // { "year": 2021, "new_recruits": 350, "resignations": 75 },
    // { "year": 2022, "new_recruits": 380, "resignations": 80 }
  ];
  
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

      <div className="w-full h-[90%] border-gray-200 border-2 rounded-lg my-4 border-gray-200 shadow-lg ">
        <div className="w-full h-full hidden md:flex">
        <BarChart data = {data}/>
        </div>
        <div className="md:hidden w-full h-full">
        <MobileChart data = {data}/>
        </div>
      </div>
      <div className="w-full flex items-center justify-between h-72 my-4">
        <div className="rounded-xl  border-2 shadow-lg border-gray-200 w-[45%] h-full"></div>
        <div className="rounded-xl border-2 shadow-lg border-gray-200 w-[45%] h-full"></div>
      </div>


    </>
  );
};

export default Home;
