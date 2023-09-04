"use client";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Text } from "./UI";
import Basic from "./Basic";
import Contact from "./Contact";
type Props = {
  setAddPopup: (addpopup: Boolean) => void;
};

function FormComponent({ setAddPopup }: Props) {
  const [state, setState] = useState<String>("basic");

  const changeToBasic = () => {
    setState("basic");
  };
  const changeToContact = () => {
    setState("contact");
  };

  return (
    <div className=" bg-[#FAFAFA] relative w-[90%]  md:w-fit h-fit border p-5 rounded-lg m-32 mx-auto text-[#221e41]">
      <div className="flex flex-row justify-between items-center">
        <Text variant="titleXl" className="inline-block max-w-max">
          Add New Profile
        </Text>
        <CloseIcon fontSize="large" onClick={() => setAddPopup(false)} />
      </div>
      <div className="mt-4 text-[0.8em] mb-10">
        <div className="flex gap-x-10">
          <div
            className={`px-28 py-2 hidden md:flex border-b-4 ${
              state === "basic" ? "border-blue" : "border-secondary"
            }`}
            onClick={changeToBasic}
          >
            <Text
              variant="productTitle"
              className="inline-block  max-w-max text-[16px] font-semibold"
            >
              Basic
            </Text>
          </div>
          <div
            className={`px-28 hidden md:flex py-2 border-b-4 ${
              state === "contact" ? "border-blue" : "border-secondary"
            }`}
            onClick={changeToContact}
          >
            <Text
              variant="productTitle"
              className="inline-block hidden md:flex max-w-max text-[16px] font-semibold"
            >
              Contact
            </Text>
          </div>
        </div>
      </div>
      <div>
        {/* basic and contact rendering  */}
        {state === "basic" ? (
          <Basic setState={setState} />
        ) : (
          <Contact setState={setState} setAddPopup={setAddPopup}  />
        )}
      </div>
    </div>
  );
}

export default FormComponent;
