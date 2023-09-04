"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const DataApiContext = createContext();

// Create a custom hook to use the context
export const useDataApi = () => useContext(DataApiContext);


const DataApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataApiContext.Provider value={{ data, loading, error }}>
      {children}
    </DataApiContext.Provider>
  );
};

export default DataApiProvider;
