import { useTheme } from "@emotion/react";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { annoucement, cale, home01, home02, home03 } from "../assets";
import {
  AnnouncementOutlined,
  CampaignOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
  WalletOutlined,
} from "@mui/icons-material";

const LandingPage = () => {
  const theme = useTheme();
  const arr = [
    {
      key: " Step 1",
      val: "Create your bespoke wishlist and select your preferred gifts",
    },
    {
      key: " Step 2",
      val: "Notify your friends",
    },
    {
      key: " Step 3",
      val: "Your friends contribute to fulfilling your wishlist by eitherbuying a gift outright or adding funds towards the fulfillment of your top/preferred gift(s).",
    },
  ];
  return (
    <Grid item container>
      <Grid
        item
        container
        px={2}
        my={4}
        sx={{
          background: `url(${home01}) ${theme.palette.common.lightFuciaPink} center no-repeat `,
          backgroundSize: "contain",
          backgroundImage: { md: "none" },
          borderRadius: "1.5rem",
          minHeight: { md: "40rem", xs: "20rem", sm: "30rem" },
        }}
        py={5}
      >
        <Grid item flex={2}>
          <Grid
            item
            container
            flexDirection={"column"}
            sx={{ height: "100%", textShadow: "0 .5px 0 black" }}
            justifyContent={"center"}
            gap={2}
          >
            <Typography variant="h6">
              Sit back, relax and enjoy an exciting new way to be the center of
              attention as you celebrate your special day.
            </Typography>
            <Typography variant="h6">
              Get the gifts you really want by creating a bespoke wishlist and
              sharing it with your friends for crowdfunding then take it a step
              further by using our social features to share/spread the love and
              excitement.{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          flex={1}
          sx={{ display: { xs: "none", md: "block" }, height: "100%" }}
        >
          <Avatar
            src={home01}
            variant="square"
            sx={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        py={4}
        justifyContent={"center"}
        sx={{ maxWidth: "90%", mx: "auto" }}
      >
        <Grid item>
          <Typography
            textAlign={"center"}
            gutterBottom
            variant="h2"
            color={"secondary"}
          >
            Elevate your{" "}
            <Typography variant="span" color={"primary"}>
              birthday experience
            </Typography>{" "}
          </Typography>
          <Typography
            textAlign={"center"}
            gutterBottom
            color="info"
            variant="h4"
          >
            By using CHEERS, our exciting features will help you experience
            birthdays as they are truly meant to be filled with love,
            thoughtfulness and fun. Here are some of CHEERS awesome feature.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        gap={4}
        py={4}
        sx={{ maxHeight: "37rem", px: 3, py: 4 }}
      >
        <Grid item flex={1} sx={{ alignSelf: "flex-end", pb: 3, px: 6 }}>
          <Grid item>
            <CampaignOutlined sx={{ fontSize: "4rem", fill: "#E20489" }} />
          </Grid>
          <Typography my={2} variant="h3" fontWeight={800} color={"secondary"}>
            Social Features{" "}
          </Typography>
          <Typography color="info" variant="h6">
            With great features like birthday reminders, status updates &
            messaging. CHEERS will save you the stress of checking the calendar
            every other day, the trouble of sending apology notes and sitting
            through tantrums because you forgot a birthday.{" "}
          </Typography>
        </Grid>
        <Grid item flex={1} sx={{ height: "100%" }}>
          <Avatar
            src={cale}
            variant="square"
            sx={{
              width: "100%",
              borderRadius: "1.3rem",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        gap={4}
        py={4}
        sx={{ maxHeight: "37rem", px: 3, py: 4 }}
      >
        <Grid item flex={1} sx={{ height: "100%", px: 6 }}>
          <Avatar
            src={home02}
            variant="square"
            sx={{
              width: "100%",
              borderRadius: "1.3rem",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid item flex={1} sx={{ alignSelf: "flex-end", pb: 3 }}>
          <Grid item>
            <ShoppingCartOutlined sx={{ fontSize: "4rem", fill: "#E20489" }} />
          </Grid>
          <Typography my={2} variant="h3" fontWeight={800} color={"secondary"}>
            Wishlist & Marketplace Features
          </Typography>
          <Typography color="info" variant="h6">
            As you create your Birthday Wishlist, choose from a wide selection
            of amazing gifts from local and international vendors in our
            Marketplace. Once fulfilled, your birthday gifts will be delivered
            straight to your doorstep absolutely for free.{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        gap={4}
        py={4}
        sx={{ maxHeight: "37rem", px: 3, py: 4 }}
      >
        <Grid item flex={1} sx={{ alignSelf: "flex-end", pb: 3 }}>
          <Grid item>
            <WalletOutlined sx={{ fontSize: "4rem", fill: "#E20489" }} />
          </Grid>
          <Typography my={2} variant="h3" fontWeight={800} color={"secondary"}>
            Wallet & Crowdfunding Features
          </Typography>
          <List>
            {arr.map((ite) => (
              <ListItem key={ite.key}>
                <ListItemText
                  primary={
                    <Typography variant="h4" fontWeight={700} color={"info"}>
                      {ite.key}:
                      <Typography variant="spa" fontWeight={400}>
                        {ite.val}
                      </Typography>
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item flex={1} sx={{ height: "100%", px: 6 }}>
          <Avatar
            src={home03}
            variant="square"
            sx={{
              width: "100%",
              borderRadius: "1.3rem",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
