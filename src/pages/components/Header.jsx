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
import { bg, logo, bg01, bg06, bg03, bg02 } from "../../assets";
import { Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useState, useLayoutEffect } from "react";

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
  const [active, setActive] = useState({
    text: "Make all your Birthday wishes come true",
    subText: null,
    route: "/",
    image: bg06,
  });
  const location = useLocation();
  console.log(active.route === location.pathname);
  console.log(location.pathname);
  useLayoutEffect(() => {
    pagesAcc.map((page) =>
      page.route === location.pathname ? setActive(page) : null
    );
  }, [location.pathname]);

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
        minHeight: "100dvh",
        minHeight: "100vh",
        background: `#E20489 url(${active.image}) center no-repeat `,
        backgroundSize: "cover",

        // backgroundAttachment: "fixed",
        backgroundOrigin: "content-box",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{ height: "max-content", background: "transparent" }}
      >
        <Container maxWidth="xl" sx={{ py: "1rem" }}>
          <Toolbar disableGutters>
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
                  variant={page.name === "Vendor" && "contained"}
                  color="error"
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
        sx={{ maxWidth: { md: "70%", xs: "80vw" }, mx: "auto" }}
        alignItems={"center"}
      >
        <Typography variant="h1" textAlign={"center"} gutterBottom>
          {active.text}{" "}
        </Typography>
        {active.subText && (
          <Typography variant="h5" textAlign={"center"} color={"#fff"}>
            {active.subText}
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
