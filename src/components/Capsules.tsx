import React from "react";
import { Icon1 } from "../../public/assets/icons";
import { Text } from "./UI";
import { Chip } from "@mui/material";
interface ChildComponentProps {
  data: {
    icon: any;
    title: string;
    num: string;
    inc: string;
  };
}

const Capsules: React.FC<ChildComponentProps> = ({ data }) => {
  return (
    <section className="relative w-full md:w-64 body-font my-2">
      <div className="container mx-auto border-2 border-gray-200 rounded-xl shadow-xl px-3">
        <div className="flex flex-wrap">
          <div className="w-full p-2">
            <div className="py-2 px-2 ">
              <div className="flex flex-col">
                <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
                  <data.icon />
                </div>
                <Text variant="titleSm" className="inline-block max-w-max">
                  {data.title}
                </Text>
              </div>
              <div className="flex gap-x-12 mt-2">
                <div>
                  <Text
                    variant="productTitle"
                    className="inline-block font-semibold max-w-max"
                  >
                    {data.num}
                  </Text>
                </div>
                <div>
                  <Chip
                    label={data.inc}
                    className="absolute right-2 bottom-4"
                    color="success"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capsules;
