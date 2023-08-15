import { Brightness6, Group, Home, LockOutlined, Settings } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React,{ useContext }  from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ThemeContext from '../ThemeContext';
import { useTheme } from '@mui/material/styles';


const ThemeToggle = () => {
  const theme = useTheme();
  // const { mode, toggleTheme } = useContext(ThemeContext);
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = themeMode === 'dark';

  const handleThemeToggle = () => {
    const newMode = isDarkMode ? 'light' : 'dark';
    console.log("Before Mode: ",theme.palette.mode);
    toggleTheme();
    console.log("After Mode: ",theme.palette.mode);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton component="p">
        <ListItemIcon>
          <Brightness6 />
        </ListItemIcon>
        <Switch checked={isDarkMode} onChange={handleThemeToggle} />
      </ListItemButton>
    </ListItem>
  );
};


const Sidebar = () => {

  // function ThemeToggle() {
  //   const theme = useTheme();
  //   const { mode, toggleTheme } = useContext(ThemeContext);
  
  //   const isDarkMode = theme.palette.mode === 'dark';
  
  //   const handleThemeToggle = () => {
  //     toggleTheme();
  //   };

  // }

  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block"}}}>
      <Box position={"fixed"} p={2} >
        <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/friends">
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/profile">
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/joinme">
                <ListItemIcon>
                  <LockOutlined />
                </ListItemIcon>
                <ListItemText primary="Join Me" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/connect">
                <ListItemIcon>
                  <LockOutlined />
                </ListItemIcon>
                <ListItemText primary="Connect" />
              </ListItemButton>
            </ListItem>
            <ThemeToggle />
          </List>
        </Box>
    </Box>
  )
}

export default Sidebar