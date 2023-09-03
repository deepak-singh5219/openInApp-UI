import React from "react";
import { Icon1 } from "../../public/assets/icons";
import { Text } from "./UI";
import { Chip } from "@mui/material";
type Props = {};

function Capsules({}: Props) {
  return (
    <section className="body-font">
      <div className="container  mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="w-full p-4">
            <div className="border-2 border-gray-200 py-6 px-8 rounded-xl shadow-xl">
              <div className="flex flex-col">
                <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
                  <Icon1 />
                </div>
                <Text variant="productTitle" className="inline-block max-w-max">
                  Total Revenues
                </Text>
              </div>
              <div className="flex gap-x-12 mt-4">
                <div>
                  <Text variant="titleXl" className="inline-block max-w-max">
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
