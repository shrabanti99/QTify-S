import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/styled-engine";
import { fetchNewAlbums, fetchTopAlbums } from "./api/api";


function App() {
  const [data, setdata] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setdata((prevState) => {
        return {...prevState, [key]: data};
      })
    })
  }
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
  }, []);
  const {topAlbums = [], newAlbums = []} = data;

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet context={{data: {topAlbums, newAlbums}}} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
