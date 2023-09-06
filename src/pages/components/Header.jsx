import {
  MenuItem,
  Button,
  Avatar,
  Container,
  AppBar,
  Menu,
  Box,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { logo, bg05, bg07, bg06 } from "~assets";
import { Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Swipe from "./Swipe";

const pages = [
  {
    name: "Home",
    route: "/",
  },

  {
    name: "Vendor",
    route: "https://cheers-vendor.netlify.app",
  },
];
const pagesAcc = [
  {
    text: "Make all your Birthday wishes come true",
    subText: null,
    route: "/",
    imgPath: bg06,
  },
  {
    text: "Create exceptional moments",
    subText: null,
    route: "/faq",
    imgPath: bg07,
  },

  {
    text: "Show Love",
    subText: null,
    route: "/service",
    imgPath: bg05,
  },
];

function Header() {
  const [activeStep, setActiveStep] = useState(0);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { pathname } = useLocation();
  let control = pathname !== "/terms-of-use" && pathname !== "/policy";
  const theme = useTheme();
  return (
    <Grid
      item
      container
      sx={{
        position: "relative",
        minHeight: control ? "100vh" : "100%",
        backgroundColor: `#E20489`,
        backgroundSize: "cover",
        backgroundOrigin: "content-box",
      }}
    >
      {control && (
        <Swipe activeStep={activeStep} setActiveStep={setActiveStep} />
      )}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          height: "max-content",
          backgroundColor: !control
            ? theme.palette.common.deepRed
            : "transparent",
          // background: "transparent",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: "1rem" }}>
            <Avatar
              component={Link}
              to="/"
              src={logo}
              sx={{
                width: { xs: "15rem" },
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
                <MenuIcon sx={{ fontSize: "3rem" }} />
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
                  <MenuItem
                    key={page.route}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={page.route}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        fontSize: "1.9rem",
                        textTransform: "capitalize",
                        fontWeight: 700,
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              gap={4}
              sx={{ mr: { sm: 1.5 }, display: { xs: "none", sm: "flex" } }}
            >
              {pages.map((page) => (
                <Button
                  key={page.route}
                  component={Link}
                  to={page.route}
                  disableElevation
                  variant={page.name === "Vendor" ? "contained" : "text"}
                  color="error"
                  target="_blank"
                  sx={{
                    my: 2,
                    color: "white",
                    fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.9rem" },
                    display: "block",
                    textTransform: "capitalize",
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
      {control && (
        <Grid
          item
          container
          flexDirection={"column"}
          sx={{ zIndex: 400, maxWidth: { md: "70%", xs: "80vw" }, mx: "auto" }}
          alignItems={"center"}
        >
          <Typography variant="h1" textAlign={"center"} gutterBottom>
            {pathname === "/contact"
              ? "Talk to us, we are here 24/7 "
              : pagesAcc[activeStep].text}{" "}
          </Typography>
          {(pagesAcc[activeStep].subText || pathname === "/contact") && (
            <Typography variant="h5" textAlign={"center"} color={"#fff"}>
              {pathname === "/contact"
                ? "Providing an exciting new way to be the center of attention as you celebrate your special day is personal for us, so we’d love to hear from you."
                : pagesAcc[activeStep].subText}
            </Typography>
          )}
          {pathname !== "/contact" && pathname !== "/terms-of-use" && (
            <Grid item mt={6}>
              <Button
                variant="contained"
                href="#day"
                color="error"
                disableElevation
                sx={{ fontSize: "2.6rem", fontWeight: 700 }}
              >
                Get Started
              </Button>
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  );
}
export default Header;
