import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useContext} from 'react'
import HubIcon from '@mui/icons-material/Hub';
import { Mail, Notifications } from '@mui/icons-material';
import { deepPurple } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import ThemeContext from '../ThemeContext';

const CustomToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});


const CustomSearchBar = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    padding: "0px 10px",
    width: "40%"
}));

const CustomIconBar = styled(Box)(({theme}) => ({
    display: "none",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    [theme.breakpoints.up("sm")] : {
        display: "flex"
    }
}));

const MobileUserIcon = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    [theme.breakpoints.up("sm")] : {
        display: "none"
    }
}));



const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const theme = useTheme();
    // const { mode, toggleTheme } = useContext(ThemeContext);
    const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="sticky">
        <CustomToolBar>
            <Typography variant="h6" sx={{ display: { xs: "none", sm: "block"}}} >
                Meta VGEC
            </Typography>
            <HubIcon sx={{ display: { xs: "block", sm: "none"}}}  />
            <CustomSearchBar><InputBase placeholder='Search ...'></InputBase></CustomSearchBar>
            <CustomIconBar>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
                <Avatar sx={{ bgcolor: deepPurple[600] }} onClick={() => setOpenNav(true)}>GG</Avatar>
            </CustomIconBar>
            <MobileUserIcon onClick={() => setOpenNav(true)}>
                <Avatar sx={{ bgcolor: deepPurple[600] }}>GG</Avatar>
                <Typography variant='h6'>Govind</Typography>
            </MobileUserIcon>
        </CustomToolBar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={openNav}
            onClose={() => setOpenNav(false)}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default NavBar