import { Box, Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Friend from "./pages/Friend";
import { ThemeProvider } from "./ThemeContext";
// import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/joinme" element={<SignUp />} />
            <Route path="/connect" element={<SignIn />} />
            <Route path="/friends" element={<Friend />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
