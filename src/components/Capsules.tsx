import React from "react";
import { Icon1 } from "../../public/assets/icons";
import { Text } from "./UI";
import { Chip } from "@mui/material";
type Props = {};

const Capsules = ({}: Props) => {
  return (
    <section className="body-font my-2 mx-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full p-2">
            <div className="border-2 border-gray-200 py-2 px-2 rounded-xl shadow-xl">
              <div className="flex flex-col">
                <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
                  <Icon1 />
                </div>
                <Text variant="titleSm" className="inline-block max-w-max">
                  Total Revenues
                </Text>
              </div>
              <div className="flex gap-x-12 mt-2">
                <div>
                  <Text variant="productTitle" className="inline-block font-semibold max-w-max">
                    $2,129,430
                  </Text>
                </div>
                <div>
                  <Chip label="+2.5%" color="success" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capsules;
