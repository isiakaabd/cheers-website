import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";

import { Grid, ListItemButton, ListItemIcon } from "@mui/material";
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

const options = [
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Become a CHEERS VENDOR",
    link: "/become-a-cheers-vendor",
  },
];
const text = {
  fontSize: "clamp(1.4rem,2vw,1.85rem)",
  fontWeight: 500,
};
export default function BottomAppBar() {
  const theme = useTheme();
  return (
    <React.Fragment>
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
                gap: 2,
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
                  <Typography gutterBottom variant="h5" sx={{ py: 4 }}>
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
                        color="primary"
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
                      <MailOutline color="primary" sx={{ fontSize: "3rem" }} />
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

                <List dense sx={{ py: 4 }}>
                  {options.map((item, idx) => (
                    <ListItemButton component={"a"} to="#">
                      <ListItem key={idx} disableGutters dense>
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
    </React.Fragment>
  );
}
