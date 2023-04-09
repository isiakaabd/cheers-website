import { Avatar, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Question2Icon, QuestionIcon, service01 } from "../assets";
import Socials from "./components/Socials";
import { ContactUs } from "./components";
import {
  ArrowForward,
  CampaignOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Service = () => {
  const arr = [
    {
      name: "Birthday Planning",
      Icon: CampaignOutlined,
      text: "Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation",
    },
    {
      name: "Crowdfunding",
      Icon: ShoppingCartOutlined,
      text: "Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation",
    },
    {
      name: "WIshlist",
      Icon: WalletOutlined,
      text: "Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation",
    },
    {
      name: "Birthday Planning",
      Icon: CampaignOutlined,
      text: "Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation",
    },
    {
      name: "Crowdfunding",
      Icon: ShoppingCartOutlined,
      text: "Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation",
    },
    {
      name: "WIshlist",
      Icon: WalletOutlined,
      text: "Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation",
    },
  ];
  return (
    <Grid item container sx={{ mt: { md: "5rem", sm: "3rem", xs: "1.5rem" } }}>
      <Grid item width="100%">
        <Typography variant="h2" width="100%" textAlign={"center"} gutterBottom>
          Birthdays the best way
        </Typography>
        <Grid item md={8} sm={10} mx="auto">
          <Typography variant="h5" textAlign={"center"}>
            Eorem ipsum dolor sit amet consectetur elit sed lusm tempor
            incididunt ut labore et dolore mag aliqua enima minim veniam quis
            nostrud exercitation{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        py="5rem"
        display={"grid"}
        gap={3}
        gridTemplateColumns={{ md: "repeat(3,1fr)", sm: "1fr 1fr", xs: "1fr" }}
      >
        {arr.map((item, idx) => (
          <Grid item container key={idx}>
            <Grid item container alignItems={"center"}>
              <Grid item mr={1}>
                <item.Icon sx={{ fontSize: "4rem", fill: "#E20489" }} />
              </Grid>
              <Typography variant="h4" fontWeight={800}>
                {item.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" fontWeight={400}>
                {item.text}{" "}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background: `#5F0B4A url(${service01}) center no-repeat`,
          color: "#fff",
          px: { md: "4rem", xs: "2rem" },
          // background: "red",
          height: { md: "30rem", xs: "20rem", sm: "25rem" },
        }}
        mb={"3rem"}
      >
        <Typography variant="h5" fontWeight={700} textAlign={"center"}>
          With a full range of Birthday Planning Services, our Clients have
          Successful & Prosperous Birthdays!
        </Typography>
      </Grid>
      <Grid item width="100%">
        <Typography
          variant="h2"
          color={"error"}
          width="100%"
          textAlign={"center"}
          gutterBottom
        >
          Explore our gallery{" "}
        </Typography>
        <Grid item md={8} sm={10} mx="auto">
          <Typography variant="h5">
            Bring everyone that has a birthday on cheers and never forget
            birthdays ever again.{" "}
          </Typography>
        </Grid>
        <Grid item container my="4rem" gap={2} justifyContent={"center"}>
          <Grid item justifyContent={"center"} container gap={2}>
            <Avatar
              src={service01}
              sx={{ width: "30rem", height: "15rem" }}
              variant="square"
            />
            <Avatar
              src={service01}
              sx={{ width: "30rem", height: "15rem" }}
              variant="square"
            />
            <Avatar
              src={service01}
              sx={{ width: "30rem", height: "15rem" }}
              variant="square"
            />
          </Grid>
          <Grid item>
            <Button
              disableElevation
              color="error"
              component={Link}
              to="/gallery"
              endIcon={<ArrowForward />}
              variant="contained"
              sx={{
                fontWeight: 700,
                width: "100%",
                textTransform: "initial",
                fontSize: "clamp(1.4rem,8vw,2rem)",
              }}
            >
              View More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Service;
