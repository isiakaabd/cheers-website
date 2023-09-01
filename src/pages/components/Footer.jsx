import {
  AppBar,
  Grid,
  ListItemButton,
  ListItemIcon,
  List,
  Avatar,
  ListItemText,
  ListItem,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";

import { logo, service04, service05, service06, testimonial } from "@assets";
import {
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
    link: "/#faq",
  },
  // {
  //   name: "Services",
  //   link: "/service",
  // },
  {
    name: "Become a CHEERS VENDOR",
    link: "https://cheers-vendor.netlify.app",
  },
];
const text = {
  fontSize: "clamp(1.4rem,2vw,1.85rem)",
  fontWeight: 500,
  lineHeight: "2.1rem",
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
                gap: { md: "5rem", xs: "1.5rem" },
                p: { md: 2, xs: 1 },
                gridTemplateColumns: {
                  sm: "1.5fr repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                  xs: "repeat(2,1fr)",
                },
                flexWrap: { md: "nowrap", xs: "wrap" },
              }}
            >
              <Grid item gridColumn={{ xs: "1/3", sm: 1 }}>
                <Grid container flexDirection={"column"}>
                  <Avatar
                    src={logo}
                    variant="square"
                    sx={{
                      width: { xs: "15rem" },
                      "& img": { objectFit: "contain" },
                      mr: "auto",
                    }}
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      py: 4,
                      fontSize: { md: "1.8rem", xs: "1.6rem" },
                      lineHeight: "2.1rem",
                      fontWeight: 500,
                    }}
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
                    <ListItemButton
                      disableGutters
                      component={Link}
                      to={`mailto:hello@cheers.global`}
                    >
                      <ListItemIcon sx={{ minWidth: "4rem" }}>
                        <MailOutline color="error" sx={{ fontSize: "3rem" }} />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={text}
                        primary="hello@cheers.global"
                      />
                    </ListItemButton>
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
                      // href={item.link === "#faq" && "#faq"}
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
                            lineHEight: "2.1rem",
                          }}
                        />
                      </ListItem>
                    </ListItemButton>
                  ))}
                </List>
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
