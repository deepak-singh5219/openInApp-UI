"use client"
import React from 'react'
import { Email, Instagram, Whatsapp, Youtube } from '../../../public/assets/icons'
import { useFormData } from "@/context/FormContext";



const Profile = () => {

    const {formData} = useFormData();
    const {name, email, phone, data} = formData;
   
    // console.log(formData)
  return (
    <div className="flex w-full h-full items-center justify-center">
    <div className="flex flex-col items-start justify-around h-[80%] w-[85%]">
        
         <h1 className="md:text-md text-lg font-semibold text-start text-gray-800  my-3">
              {name}
        </h1>

        <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center justify-center">
        <Whatsapp/>
        <h1 className="md:text-sm truncate w-32 text-xs font-normal underline underline-offset-4 text-start text-gray-500 mx-1 my-3">
              {phone}
        </h1>
        </div>
        <div className="flex items-center justify-center">
        <Instagram/>
        <h1 className="md:text-sm truncate w-32 text-xs font-normal underline underline-offset-4 text-start text-gray-500 mx-1 my-3">
              {data?.instagram}
        </h1>
        </div><div className="flex items-center justify-center">
        <Email/>
        <h1 className="md:text-sm truncate w-32 text-xs font-normal underline underline-offset-4 text-start text-gray-500 mx-1 my-3">
              {email}
        </h1>
        </div><div className="flex items-center justify-center">
        <Youtube/>
        <h1 className="md:text-sm text-xs truncate w-32 font-normal underline underline-offset-4 text-start text-gray-500 mx-1 my-3">
              {data?.youtube}
        </h1>
        </div>
       
        </div>
      
    </div>
    </div>
  )
}

export default Profile;
