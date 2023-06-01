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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { bg, logo, bg01, bg06, bg03, bg02 } from "@assets";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swipe from "./Swipe";

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
const pagesAcc = [
  {
    text: "Frequently Asked Question (FAQ)",
    subText:
      "If others are asking, then you're probably thinking the same thing. Here are some answers that would help.",
    route: "/faq",
    image: bg03,
  },
  {
    text: "Make all your Birthday wishes come true",
    subText: null,
    route: "/",
    image: bg06,
  },
  {
    text: "Talk to us, we are here 24/7 ",
    subText:
      "Providing an exciting new way to be the center of attention as you celebrate your special day is personal for us, so we’d love to hear from you.",
    route: "/contact",
    image: bg,
  },
  {
    text: "What we do",
    subText: null,
    route: "/service",
    image: bg02,
  },
  {
    text: "Events Gallery",
    subText: null,
    route: "/gallery",
    image: bg01,
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

  return (
    <Grid
      item
      container
      sx={{
        position: "relative",
        // minHeight: "100dvh",
        minHeight: "100vh",
        backgroundColor: `#E20489`,
        backgroundSize: "cover",
        backgroundOrigin: "content-box",
      }}
    >
      <Swipe activeStep={activeStep} setActiveStep={setActiveStep} />
      <AppBar
        position="static"
        elevation={0}
        sx={{ height: "max-content", background: "transparent" }}
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
                        fontSize: "1.6rem",
                        textTransform: "capitalize",
                        fontWeight: 500,
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
                  variant={page.name === "Vendor" && "contained"}
                  color="error"
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
      <Grid
        item
        container
        flexDirection={"column"}
        sx={{ zIndex: 400, maxWidth: { md: "70%", xs: "80vw" }, mx: "auto" }}
        alignItems={"center"}
      >
        <Typography variant="h1" textAlign={"center"} gutterBottom>
          {pagesAcc[activeStep].text}{" "}
        </Typography>
        {pagesAcc[activeStep].subText && (
          <Typography variant="h5" textAlign={"center"} color={"#fff"}>
            {pagesAcc[activeStep].subText}
          </Typography>
        )}
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
      </Grid>
    </Grid>
  );
}
export default Header;
