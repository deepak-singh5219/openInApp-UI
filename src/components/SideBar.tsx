// side bar code here
import React from "react";
import { Dashboard, Schedules, Settings, Transactions, Users } from "../../public/assets/icons";
import MobileSidebar from "./MobileSidebar";



type Props = {};

const SideBar = (props: Props) => {
  const sideBarMenuOptions = [
    {icon: Dashboard, title: "Dashboard"},
    {icon: Transactions, title: "Transactions"},
    {icon: Schedules, title: "Schedules"},
    {icon: Users, title: "Users"},
    {icon: Settings, title: "Settings"}
  ];
  return (
<>
<MobileSidebar/>
<div className="h-[95%] hidden w-72 md:flex flex-row">
  <div className="relative flex py-8 flex-col w-5/6 bg-gradient-to-r from-[#4285F4] to-[#3C83F9] rounded-2xl w-full overflow-hidden">
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
</div> 
</>
 );
};

export default SideBar;
