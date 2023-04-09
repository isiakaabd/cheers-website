import {
  AppBar,
  Grid,
  styled,
  ListItemButton,
  ListItemIcon,
  List,
  ListSubheader,
  Avatar,
  ListItemText,
  ListItemAvatar,
  ListItem,
  Box,
  CssBaseline,
  Paper,
  Fab,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";

import { logo, testimonial } from "../../assets";
import {
  LocalActivity,
  LocationCityOutlined,
  LocationOnOutlined,
  MailOutline,
  MapOutlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import { Fragment } from "react";

const options = [
  {
    name: "Contact Us",
    link: "/contact",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Services",
    link: "/service",
  },
  {
    name: "Become a CHEERS VENDOR",
    link: "/service",
  },
];
const text = {
  fontSize: "clamp(1.4rem,2vw,1.85rem)",
  fontWeight: 500,
};
export default function BottomAppBar() {
  const theme = useTheme();

  return (
    <Fragment>
      <CssBaseline />

      <AppBar
        position="relative"
        component={"footer"}
        sx={{
          top: "auto",
          background: theme.palette.common.deepRed,
          bottom: 0,
          pt: 4,
          py: 2,
        }}
      >
        <Toolbar>
          <Grid item container flexDirection={"column"}>
            <Grid
              item
              container
              sx={{
                display: "grid",
                gap: "3rem",
                p: { md: 2, xs: 1 },
                gridTemplateColumns: {
                  md: "repeat(4,1fr)",
                  xs: "repeat(2,1fr)",
                },
                flexWrap: { md: "nowrap", xs: "wrap" },
              }}
            >
              <Grid item>
                <Grid container flexDirection={"column"}>
                  <Avatar
                    src={logo}
                    variant="square"
                    sx={{
                      width: { sm: "10rem" },
                      "& img": { objectFit: "contain" },
                      mr: "auto",
                    }}
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ py: 4 }}
                    textAlign={"justify"}
                  >
                    {" "}
                    With Cheers, birthdays mean a bit more than just a special
                    day. It’s a chance to show people how much they mean to you
                    and how much you care.
                  </Typography>
                  <Socials />
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h4" fontWeight={800}>
                  Keep in Touch
                </Typography>
                <List sx={{ py: 4 }}>
                  <ListItem disableGutters dense>
                    <ListItemIcon sx={{ minWidth: "4rem" }}>
                      <LocationOnOutlined
                        color="error"
                        sx={{ fontSize: "3rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={text}
                      primary="11, Adeniyi Jones, off Oba Akran Ikeja Lagos"
                    />
                  </ListItem>
                  <ListItem disableGutters dense>
                    <ListItemIcon sx={{ minWidth: "4rem" }}>
                      <MailOutline color="error" sx={{ fontSize: "3rem" }} />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={text}
                      primary="info@cheers.africa"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item>
                <Typography variant="h4" fontWeight={800}>
                  Quick Links
                </Typography>

                <List dense sx={{ py: 4 }} disablePadding>
                  {options.map((item, idx) => (
                    <ListItemButton
                      dense
                      component={Link}
                      to={item.link}
                      disableGutters
                      disableTouchRipple
                      disableRipple
                      sx={{
                        textDecoration: "underline",
                        textDecorationColor: "#E20489",
                        textDecorationThickness: "2px",
                        textUnderlineOffset: ".5rem",
                      }}
                    >
                      <ListItem key={idx} disableGutters dense disablePadding>
                        <ListItemText
                          primary={item.name}
                          primaryTypographyProps={{
                            fontSize: "clamp(1.4rem,2vw,1.85rem)",
                          }}
                        />
                      </ListItem>
                    </ListItemButton>
                  ))}
                </List>
              </Grid>
              <Grid item>
                <Typography variant="h4" fontWeight={800}>
                  Testimonials
                </Typography>
                <Grid
                  item
                  container
                  sx={{
                    display: "grid",
                    gap: 2,
                    py: 4,
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  <Grid item>
                    <Avatar
                      src={testimonial}
                      variant="square"
                      sx={{
                        width: "100%",
                        minHeight: "10rem",
                        objectFit: "contain",
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Avatar
                      src={testimonial}
                      variant="square"
                      sx={{
                        width: "100%",
                        minHeight: "10rem",
                        objectFit: "contain",
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Avatar
                      src={testimonial}
                      variant="square"
                      sx={{
                        width: "100%",
                        minHeight: "10rem",
                        objectFit: "contain",
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Avatar
                      src={testimonial}
                      variant="square"
                      sx={{
                        width: "100%",
                        minHeight: "10rem",
                        objectFit: "contain",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography
              variant="h5"
              sx={{ width: "100%", textAlign: "center" }}
            >
              Copyright © 2022 Cheers
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
