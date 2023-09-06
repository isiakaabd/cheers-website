import { Button, Grid, Typography } from "@mui/material";
import {
  ArrowForward,
  CampaignOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { A, C, D, E, F, G, H, I, J, K, L, M, service01 } from "~assets";

const Service = () => {
  let flex = {
    display: "flex",
    gap: "1rem",
    justifyContent: "space-evenly",
  };
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
      name: "Wishlist",
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
        px={"4rem"}
        display={"grid"}
        gap={"4rem"}
        gridTemplateColumns={{ md: "repeat(3,1fr)", sm: "1fr 1fr", xs: "1fr" }}
      >
        {arr.map((item, idx) => (
          <Grid item container key={idx}>
            <Grid item container>
              <Grid item mr={1}>
                <item.Icon sx={{ fontSize: "4rem", fill: "#E20489" }} />
              </Grid>
              <Typography variant="h4" fontWeight={800}>
                {item.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" fontWeight={400} textAlign={"justify"}>
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
          {/* <Grid item justifyContent={"center"} container gap={2}>
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
          </Grid> */}

          <Grid item container my={"4rem"}>
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={false}
            >
              <div style={flex}>
                <img
                  src={A}
                  style={{
                    objectFit: "cover",
                    width: "27.5rem",
                    height: "35rem",
                  }}
                />

                <img
                  src={C}
                  style={{
                    objectFit: "cover",

                    width: "27.5rem",
                    height: "35rem",
                  }}
                />
                <img
                  src={D}
                  style={{
                    objectFit: "cover",

                    width: "27.5rem",
                    height: "35rem",
                  }}
                />
                <img
                  src={M}
                  style={{
                    objectFit: "cover",

                    width: "27.5rem",
                    height: "35rem",
                  }}
                />
              </div>
              <div style={flex}>
                <img
                  src={E}
                  style={{
                    objectFit: "cover",

                    width: "27.5rem",
                    height: "35rem",
                  }}
                />
                <img
                  src={F}
                  style={{
                    objectFit: "cover",

                    width: "27.5rem",
                    height: "35rem",
                  }}
                />
                <img
                  src={G}
                  style={{
                    objectFit: "cover",

                    width: "27.5rem",
                    height: "35rem",
                  }}
                />
                <img
                  src={H}
                  style={{
                    objectFit: "cover",

                    width: "27.5rem",
                    height: "35rem",
                  }}
                />
              </div>
              <div style={flex}>
                <img
                  src={I}
                  style={{
                    objectFit: "cover",

                    width: "27.5rem",
                    height: "35rem",
                  }}
                />
                <img
                  src={J}
                  style={{
                    objectFit: "cover",

                    width: "27.5rem",
                    height: "35rem",
                  }}
                />
                <img
                  src={K}
                  style={{
                    objectFit: "cover",

                    width: "27.5rem",
                    height: "35rem",
                  }}
                />
                <img
                  src={L}
                  style={{
                    objectFit: "cover",

                    width: "27.5rem",
                    height: "35rem",
                  }}
                />
              </div>
            </Carousel>
          </Grid>
          <Grid item sx={{ my: 5 }}>
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
