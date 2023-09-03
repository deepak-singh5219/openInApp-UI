// side bar code here
'use client'
import React, { useContext, useState } from "react";
import { Dashboard, Schedules, Settings, Transactions, Users } from "../../public/assets/icons";
import { SidebarContext } from "../context/SidebarContext";
import MenuIcon from '@mui/icons-material/Menu';




type Props = {};

const MobileSidebar = (props: Props) => {
  const sideBarMenuOptions = [
    {icon: Dashboard, title: "Dashboard"},
    {icon: Transactions, title: "Transactions"},
    {icon: Schedules, title: "Schedules"},
    {icon: Users, title: "Users"},
    {icon: Settings, title: "Settings"}
  ];
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  return (
<div className={`${!isOpen?"left-0":"-left-[600px]"} z-40 h-full fixed transition-all ease-in-out duration-600 md:hidden w-72 h-[90%] flex flex-row`}>
  <div className="relative flex py-8 flex-col w-5/6 bg-gradient-to-r from-[#4285F4] to-[#3C83F9] w-full overflow-hidden">
  <MenuIcon onClick={toggleSidebar} className={`text-gray-200 absolute md:hidden cursor-pointer left-4 top-4`}/>
   <div className="flex flex-col justify-center items-center">

    <div className="flex flex-col h-[85%] items-start justify-between">
   <div className="flex h-20">
      <h1 className="text-3xl text-white font-extrabold mb-5">Board.</h1>
    </div>
    <div className="flex flex-col w-full justify-between py-4">
      <ul className="flex flex-col">
      {sideBarMenuOptions.map((option, index) => (
        <li className="flex items-center justify-start py-4" key={index}>
          <div className="flex items-center">
            <span className="ml-2 text-sm font-medium text-white">
              <option.icon/>
            </span>
            <span className="ml-3 transition-font duration-300 text-md font-light w-32 hover:font-semibold mx-2 text-gray-100 hover:text-white hover:cursor-pointer">
              {option.title}
            </span>
          </div>
        </li>
      ))}
      </ul>
      </div>
      <div className="absolute bottom-[8%] flex flex-col">
        <ul>
          <li className="flex transition-font hover:cursor-pointer duration-300 hover:font-semibold text-start text-white font-extralight items-center justify-start py-1">
           Help
          </li>

          <li className="flex transition-font hover:cursor-pointer duration-300 hover:font-semibold text-start text-white font-extralight items-center justify-start py-1">
           Contact Us
          </li>
        </ul>
      </div>
      </div>

   </div>
  
  </div>
</div>  );
};

export default MobileSidebar;
