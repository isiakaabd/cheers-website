import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { bg, logo } from "../../assets";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Testimonials",
    route: "/gallery",
  },
  {
    name: "Vendor",
    route: "/service",
  },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Grid
      item
      container
      sx={{
        position: "relative",
        minHeight: "100dvh",
        minHeight: "100vh",
        background: `url(${bg}) center no-repeat`,
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{ height: "max-content", background: "transparent" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              component={Link}
              to="/"
              src={logo}
              sx={{
                width: { sm: "10rem" },
                "& img": { objectFit: "contain" },
                mr: "auto",
              }}
              variant="square"
            />

            <Box sx={{ ml: "auto", display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.route} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box gap={4} sx={{ display: { xs: "none", sm: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.route}
                  component={Link}
                  to={page.route}
                  // onClick={handleCloseNavMenu}
                  variant={page.route === "vendor" && "contained"}
                  color="error"
                  // component="h3"
                  sx={{
                    my: 2,
                    color: "white",
                    fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.9rem" },
                    display: "block",
                    fontWeight: 700,
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid
        item
        container
        flexDirection={"column"}
        sx={{ maxWidth: { md: "50%", xs: "80vw" }, mx: "auto" }}
        alignItems={"center"}
      >
        <Typography variant="h1" textAlign={"center"}>
          Make all your Birthday wishes come true
        </Typography>
        <Grid item mt={6}>
          <Button
            variant="contained"
            href="#day"
            disableElevation
            sx={{ fontSize: "2.6rem", fontWeight: 700 }}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Header;
