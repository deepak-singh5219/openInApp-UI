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
import { useDataApi } from "../../../context/ApiContext";
import DoughnutChart from "../../../components/Charts/DoughnutChart";





interface pageProps {}

const Home: FC<pageProps> = ({}) => {
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const { data, loading, error } = useDataApi();
  const sampleData = {
    "frontend_developers": 40,
    "backend_developers": 30,
    "machine_learning_engineers": 30
  }
  
  
  return (
    <>
    <MenuIcon onClick={toggleSidebar} className={`${!isOpen?"text-gray-200":"text-gray-800"} absolute md:hidden cursor-pointer left-4 top-4`}/>
     {/* <NavBar/> */}

      <div className="flex w-full flex-wrap items-center md:justify-between">
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
      <div className="w-full flex flex-col md:flex-row items-center justify-between h-full md:h-72 md:my-4">
        <div className="rounded-xl border-2 shadow-lg border-gray-200 w-[100%] my-2 md:my-0 md:w-[45%] h-full">
        <div className="flex items-center justify-between">
        <h1 className="md:text-md text-sm  font-semibold text-start text-gray-800 mx-6 my-3">Developers</h1>
        <h1 className="md:text-sm text-xs  font-light text-start text-gray-500 mx-6 my-3">May-Aug 2023</h1>
        </div>
           <DoughnutChart data={sampleData}/>
        </div>
        <div className="rounded-xl border-2 shadow-lg border-gray-200 w-[100%] md:w-[45%] my-2 md:my-0 h-full"></div>
      </div>


    </>
  );
};

export default Home;
