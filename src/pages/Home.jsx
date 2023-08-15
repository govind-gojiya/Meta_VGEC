import React from 'react'
import NavBar from "../components/NavBar";
import FeedSection from "../components/FeedSection";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <>
    <NavBar />
    <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <FeedSection />
        <RightBar />
    </Stack>
    </>
  )
}

export default Home