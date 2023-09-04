"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [profileStatus, setProfileStatus] = useState(false);
  console.log(formData);

  
  
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      if(Object.keys(savedData).length==0){
        setProfileStatus(false);
      }
      else{
        setFormData(JSON.parse(savedData));
        setProfileStatus(true); 
      }
    }
    
  }, []);
  
 
  useEffect(() => {
    if(Object.keys(formData).length==0){
        setProfileStatus(false);
    }
    else{
        localStorage.setItem('formData', JSON.stringify(formData));
        setProfileStatus(true);
    } 
  }, [formData]);
  
  return (
    <FormDataContext.Provider value={{ formData, profileStatus, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;
