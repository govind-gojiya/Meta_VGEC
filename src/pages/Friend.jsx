import React from 'react'
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { Box, Divider, InputBase, Stack, styled } from "@mui/material";
import FriendCard from '../components/FriendCard';

const CustomSearchBar = styled("div")(({theme}) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    padding: "0px 10px",
    width: "40%",
    margin: "auto",
}));

const Friend = () => {
  return (
    <>
    <NavBar />
    <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar sx={{ display: { xs: "none", sm: "block"}}}/>
        <Box flex={6} p={2} pt={3} sx={{ background: "#52d2c1", paddingX: { xs: 0, sm: 2}}}>
            <Box sx={{ margin: "0 !important", paddingX: 1}}>
                <h1>Friends</h1>
                <Divider sx={{ marginY: 2}}/>
                <CustomSearchBar><InputBase placeholder='Search ...'></InputBase></CustomSearchBar>
                <Box mt={1} sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                </Box>
                
            </Box>
        </Box>
    </Stack>
    </>
  )
}

export default Friend