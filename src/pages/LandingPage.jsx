import { useTheme } from "@emotion/react";
import {
  Avatar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import {
  appstore,
  cale,
  googleplay,
  home01,
  home02,
  home03,
  home04,
  home09,
  home10,
} from "../assets";
import {
  ArrowForward,
  CampaignOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
} from "@mui/icons-material";
import { Form, Formik } from "formik/dist";
import FormikControl from "../validation/FormikControl";
import Accordions from "./components/Accordions";
import { Link } from "react-router-dom";

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
    <Grid item container sx={{ height: "100%" }}>
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

      <Grid item container px={{ md: 6, xs: 1 }}>
        <Grid
          item
          container
          py={4}
          justifyContent={"center"}
          sx={{ maxWidth: { md: "90%", xs: "100%" }, mx: "auto" }}
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
              textAlign={{ xs: "justify" }}
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
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Grid item flex={{ md: 1, xs: 2 }} sx={{ alignSelf: "center" }}>
            <Grid item>
              <CampaignOutlined sx={{ fontSize: "4rem", fill: "#E20489" }} />
            </Grid>
            <Typography
              my={2}
              variant="h3"
              fontWeight={800}
              color={"secondary"}
            >
              Social Features{" "}
            </Typography>
            <Typography color="info" variant="h6" textAlign={{ xs: "justify" }}>
              With great features like birthday reminders, status updates &
              messaging. CHEERS will save you the stress of checking the
              calendar every other day, the trouble of sending apology notes and
              sitting through tantrums because you forgot a birthday.{" "}
            </Typography>
          </Grid>
          <Grid item flex={1} sx={{ maxHeight: "30rem" }}>
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
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Grid item flex={1} sx={{ maxHeight: "30rem" }}>
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
          <Grid item flex={{ md: 1, xs: 2 }} sx={{ alignSelf: "center" }}>
            <Grid item>
              <ShoppingCartOutlined
                sx={{ fontSize: "4rem", fill: "#E20489" }}
              />
            </Grid>
            <Typography
              my={2}
              variant="h3"
              fontWeight={800}
              color={"secondary"}
            >
              Wishlist & Marketplace Features
            </Typography>
            <Typography color="info" variant="h6" textAlign={{ xs: "justify" }}>
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
          flexDirection={{ sm: "row", xs: "column" }}
        >
          <Grid item flex={{ sm: 2, md: 1 }} sx={{ alignSelf: "center" }}>
            <Grid item>
              <WalletOutlined sx={{ fontSize: "4rem", fill: "#E20489" }} />
            </Grid>
            <Typography
              my={2}
              variant="h3"
              fontWeight={800}
              color={"secondary"}
            >
              Wallet & Crowdfunding Features
            </Typography>
            <List dense>
              {arr.map((ite) => (
                <ListItem key={ite.key} dense disableGutters disablePadding>
                  <ListItemText
                    primaryTypographyProps={{ textAlign: "justify" }}
                    primary={
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        color={"info"}
                        textAlign="justify"
                      >
                        {ite.key}:
                        <Typography variant="span" fontWeight={400}>
                          {ite.val}
                        </Typography>
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item flex={1} sx={{ maxHeight: "30rem" }}>
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

        <Grid
          px={3}
          py={5}
          item
          sx={{
            background: ` url(${home04}) #6A1347`,
            backgroundBlendMode: "hue",
            borderRadius: "1.5rem",
            color: "#fff",
          }}
          container
        >
          <Grid item container py={3}>
            <Typography variant="h2" textAlign={"center"} mb={3} width="100%">
              Let’s get started
            </Typography>
            <Grid item sx={{ maxWidth: { md: "90%" }, mx: "auto" }}>
              <Typography variant="h5" textAlign={"center"} width="100%">
                CHEERS Official launch is around the corner. By signing up to
                test the App during our BETA Stage, you’ll provide direct
                feedback to the CHEERS team then stand a chance to win unique
                privileges and receive exclusive gifts from the CHEERS team on
                YOUR special day.
              </Typography>
            </Grid>
          </Grid>

          {/* swipeale */}
          <Grid item container></Grid>
          <Grid
            item
            alignItems={"center"}
            container
            justifyContent={"center"}
            gap={4}
          >
            <Typography variant="h2" fontWeight={800}>
              COMING SOON...
            </Typography>
            <Grid item>
              <Avatar
                variant="square"
                src={googleplay}
                alt="googleplay"
                sx={{ width: "20rem", height: "100%" }}
              />
            </Grid>
            <Grid item>
              <Avatar
                variant="square"
                src={appstore}
                alt={"appstore"}
                sx={{ width: "20rem", height: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          flexDirection={{ xs: "column", sm: "row" }}
          mt={4}
          gap={4}
        >
          <Grid item flex={1}>
            <Avatar
              src={home09}
              variant="square"
              sx={{
                width: "100%",
                borderRadius: "1.3rem",
                height: "100%",
                maxHeight: "40rem",
              }}
            />
          </Grid>
          <Grid item flex={{ md: 1, sm: 2 }} id="day">
            <Grid
              item
              container
              flexDirection={"column"}
              alignItems={"space-between"}
              sx={{ height: "100%" }}
            >
              <Typography variant="h5" my={2}>
                Get started and enjoy your birthday just the way you want it to
                be full of love, fun & excitement!!!{" "}
                <Typography variant="span" color={"error"}>
                  CHEERS
                </Typography>{" "}
                will make it happen.
              </Typography>
              <Grid item flex={1} sx={{ width: "100%" }}>
                <Formik
                  initialValues={{ name: "", email: "", checkbox: false }}
                >
                  <Form style={{ height: "100%", width: "100%" }}>
                    <Grid item container sx={{ height: "100%" }}>
                      <Grid item container gap={2}>
                        <Grid item container>
                          <FormikControl name="name" placeholder="Enter Name" />
                        </Grid>
                        <Grid item container>
                          <FormikControl
                            name="email"
                            placeholder="Enter Valid Email"
                          />
                        </Grid>
                        <Grid
                          item
                          container
                          flexWrap={"nowrap"}
                          alignItems={"center"}
                        >
                          <Grid item container>
                            <FormikControl
                              name="checkbox"
                              control="checkbox"
                              label=" I have read and agreed to the terms and conditions"
                            />
                          </Grid>
                          {/* <Typography variant="h5" noWrap fontWeight={400}>
                            I have read and agreed to the{" "}
                            <Typography variant="span" color={"error"}>
                              
                            </Typography>
                          </Typography> */}
                        </Grid>
                      </Grid>
                      <Grid item mt="auto" sx={{ width: "100%" }}>
                        <Button
                          variant="contained"
                          sx={{
                            fontWeight: 700,
                            width: "100%",
                            textTransform: "initial",
                            fontSize: "clamp(1.4rem,8vw,2rem)",
                          }}
                        >
                          SUBSCRIBE TO NEWSLETTER
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*  */}
        <Grid
          item
          container
          flexDirection={"column"}
          alignItems={"center"}
          py={4}
          px={2}
          sx={{ bgcolor: "rgba(255, 185, 235, 0.45)", mt: 4 }}
        >
          <Grid item sx={{ width: "100%" }}>
            <Typography variant="h2" textAlign={"center"}>
              Explore our{" "}
              <Typography color={"error"} variant="span">
                frequently asked questions (FAQ)
              </Typography>
            </Typography>
            <Typography variant="h5" my={2} textAlign={"center"}>
              If others are asking, then you're probably thinking the same
              thing. Here are some answers that would help.
            </Typography>
          </Grid>
          <Grid item container>
            <Accordions
              arr={[
                {
                  topic: "What does Cheers do?",
                  summary:
                    "    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.    Aliquam eget maximus est, id dignissim quam.",
                },
                {
                  topic: "What does Cheers do?",
                  summary:
                    "    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.    Aliquam eget maximus est, id dignissim quam.",
                },
                {
                  topic: "What does Cheers do?",
                  summary:
                    "    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.    Aliquam eget maximus est, id dignissim quam.",
                },
                {
                  topic: "What does Cheers do?",
                  summary:
                    "    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.    Aliquam eget maximus est, id dignissim quam.",
                },
              ]}
            />
            <Grid item container justifyContent={"center"} mt={2}>
              <Grid item>
                <Button
                  disableElevation
                  endIcon={<ArrowForward />}
                  variant="contained"
                  component={Link}
                  to="/faq"
                  sx={{
                    background: "#fff",
                    color: "#8A8A8A",
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
        {/*  */}
        <Grid item container my={4} flexDirection={{ xs: "column", sm: "row" }}>
          <Grid item flex={1}>
            <Grid item container>
              <Typography variant="h2">
                Would you like to be a CHEERS{" "}
                <Typography variant="span" color={"error"}>
                  Vendor, Affiliate or Logistics Partner?
                </Typography>
              </Typography>
              <Typography color={"#8A8A8A"} variant="h5" my={4}>
                At CHEERS, we operate a seamless end-to-end process based on
                efficiency, accountability and service. Send us an email to get
                in touch with us or subscribe to our newsletter/blog to be
                updated on our pre-launch/post-launch activity.
              </Typography>
              <Grid item>
                <Button
                  disableElevation
                  variant="contained"
                  color="error"
                  sx={{
                    fontWeight: 700,
                    width: "100%",
                    textTransform: "initial",
                    fontSize: "clamp(1.4rem,8vw,2rem)",
                  }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item flex={1} sx={{ maxHeight: "35rem" }}>
            <Avatar
              src={home10}
              variant="square"
              sx={{
                width: "100%",
                "& img": { objectFit: "contain" },
                height: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
