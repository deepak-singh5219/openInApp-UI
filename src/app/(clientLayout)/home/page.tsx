"use client";
import Capsules from "@/components/Capsules";
import { Text } from "@/components/UI";
import { FC } from "react";

interface pageProps {}

const Home: FC<pageProps> = ({}) => {
  return (
    <div className="">
      <div>
        
      </div>
      <div className="flex gap-x-10 mt-10">
        <Capsules />
        <Capsules />
        <Capsules />
      </div>
    </div>
  );
};

export default Home;
