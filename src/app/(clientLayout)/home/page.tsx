"use client";
import { SidebarContext } from "../../../context/SidebarContext";
import { FC, useState } from "react";
import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Capsules from "../../../components/Capsules";
import { Text } from "../../../components/UI";
import AddIcon from "@mui/icons-material/Add";
import BarChart from "@/components/Charts/BarChart";
import MobileChart from "../../../components/Charts/MobileChart";
import { useDataApi } from "../../../context/ApiContext";
import FormComponent from "@/components/FormComponent";

interface pageProps {}

const Home: FC<pageProps> = ({}) => {
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const { data, loading, error } = useDataApi();
  const [addPopup, setAddPopup] = useState<Boolean>(false);
  const handleClick = () => {
    setAddPopup(true);
  };

  return (
    <>
      <MenuIcon
        onClick={toggleSidebar}
        className={`${
          !isOpen ? "text-gray-200" : "text-gray-800"
        } absolute md:hidden cursor-pointer left-4 top-4`}
      />
      {/* <NavBar/> */}
      <div className="flex w-full flex-wrap items-center md:justify-between">
        <Capsules />
        <Capsules />
        <Capsules />
        <Capsules />
      </div>
      <div className="w-full h-[90%] border-gray-200 border-2 rounded-lg my-4 border-gray-200 shadow-lg ">
        <div className="w-full h-full hidden md:flex">
          <BarChart data={data} />
        </div>
        <div className="md:hidden w-full h-full">
          <MobileChart data={data} />
        </div>
      </div>
      <div className="w-full flex items-center gap-x-5 h-72 my-4">
        <div className="rounded-xl  border-2 shadow-lg border-gray-200 w-[50%] h-full"></div>
        <div className="rounded-xl border-2 shadow-lg border-gray-200 w-[50%] h-full">
          <div className="flex items-center flex-col justify-center w-full h-full">
            <div className="w-20 h-20 rounded-full p-4 bg-[#F2F2F2] text-[#999CA0] flex items-center justify-center">
              <AddIcon fontSize="large" onClick={handleClick} />
            </div>
            <Text variant="productTitle" className="mt-3 ">
              Add Profile
            </Text>
          </div>
        </div>
        {addPopup ? (
          <div className="bg-[#323232e6] fixed top-0 left-0 w-full h-screen z-50">
            <FormComponent setAddPopup={setAddPopup} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
