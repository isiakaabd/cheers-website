import { useTheme } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Avatar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  appstore,
  cale,
  googleplay,
  home01,
  home02,
  imgLast as home03,
  home04,
  home09,
  home10,
  image11,
  image12,
  image13,
  image14,
  image15,
  service03,
} from "~assets";
import {
  ArrowForward,
  CampaignOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
} from "@mui/icons-material";
import { Form, Formik } from "formik/dist";
import FormikControl from "~validation/FormikControl";
import Accordions from "./components/Accordions";
import { Link } from "react-router-dom";
import Dialogs from "./components/Dialog";
import { useState } from "react";
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
  let flex = {
    display: "flex",
    gap: "1rem",
    justifyContent: "space-evenly",
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid item container sx={{ height: "100%" }}>
        <Grid
          item
          container
          px={{ md: "4rem", xs: 1 }}
          my={4}
          gap={"3rem"}
          sx={{
            backgroundColor: ` ${theme.palette.common.lightFuciaPink} `,
            borderRadius: "1.5rem",
            minHeight: { md: "40rem", xs: "20rem", sm: "30rem" },
          }}
          pt={1}
        >
          <Grid item flex={2}>
            <Grid
              item
              container
              flexDirection={"column"}
              sx={{ height: "100%" }}
              justifyContent={"center"}
              gap={2}
            >
              <Typography
                variant="body2"
                color="text.primary"
                lineHeight={"2.1rem"}
                textAlign="justify"
                fontWeight={500}
                sx={{ fontSize: { md: "1.8rem", xs: "1.4rem", sm: "1.6rem" } }}
              >
                Sit back, relax and enjoy an exciting new way to be the center
                of attention as you celebrate your special day.
              </Typography>
              <Typography
                variant="h6"
                color="text.primary"
                lineHeight={"2.1rem"}
                textAlign="justify"
                fontWeight={500}
                sx={{ fontSize: { md: "1.8rem", xs: "1.4rem", sm: "1.6rem" } }}
              >
                Get the gifts you really want by creating a bespoke wishlist and
                sharing it with your friends for crowdfunding then take it a
                step further by using our social features to share/spread the
                love and excitement.
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
            sx={{ px: { md: "2rem" } }}
          >
            <Grid item>
              <Typography
                textAlign={"center"}
                gutterBottom
                variant="h2"
                color="text.secondary"
                mb={4}
              >
                Elevate your{" "}
                <Typography variant="span" color={"text.main"}>
                  birthday experience
                </Typography>{" "}
              </Typography>
              <Typography
                textAlign={{ xs: "justify", sm: "center" }}
                gutterBottom
                color="text.info"
                variant="h4"
                fontSize={{
                  md: "2.2rem",
                  xs: "1.6rem",
                  lineHeight: "2.5rem",
                  fontWeight: 500,
                }}
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
            gap={{ md: 9, xs: 4 }}
            py={4}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Grid item flex={{ md: 1, xs: 2 }} sx={{ alignSelf: "center" }}>
              <Grid item>
                <CampaignOutlined
                  sx={{ fontSize: { md: "6rem", xs: "4rem" }, fill: "#E20489" }}
                />
              </Grid>
              <Typography
                my={2}
                variant="h3"
                fontWeight={800}
                color={"text.primary"}
              >
                Social Features{" "}
              </Typography>
              <Typography
                color="text.info"
                variant="h6"
                sx={{
                  fontSize: {
                    md: "2.2rem",
                    xs: "1.8rem",
                    fontWeight: 400,
                    lineHeight: "2.5rem",
                  },
                }}
                textAlign={{ xs: "justify" }}
              >
                With great features like birthday reminders, status updates &
                messaging. CHEERS will save you the stress of checking the
                calendar every other day, the trouble of sending apology notes
                and sitting through tantrums because you forgot a birthday.{" "}
              </Typography>
            </Grid>
            <Grid item flex={1} sx={{ maxHeight: "36rem" }}>
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
            gap={{ md: 9, xs: 4 }}
            py={4}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Grid item flex={1} sx={{ maxHeight: "36rem" }}>
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
              <Grid item container justifyContent={"right"}>
                <ShoppingCartOutlined
                  sx={{
                    fontSize: { xs: "4rem", md: "6rem" },
                    ml: "auto",
                    fill: "#E20489",
                  }}
                />
              </Grid>
              <Typography
                my={2}
                variant="h3"
                fontWeight={800}
                color={"text.primary"}
                sx={{ textAlign: "right" }}
              >
                Wishlist & Marketplace Features
              </Typography>
              <Typography
                color="text.info"
                variant="h6"
                sx={{
                  fontSize: {
                    md: "2.2rem",
                    xs: "1.8rem",
                    fontWeight: 400,
                    lineHeight: "2.5rem",
                  },
                }}
                textAlign={{ xs: "justify" }}
              >
                As you create your Birthday Wishlist, choose from a wide
                selection of amazing gifts from local and international vendors
                in our Marketplace. Once fulfilled, your birthday gifts will be
                delivered straight to your doorstep absolutely for free.{" "}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            gap={{ md: 9, xs: 4 }}
            py={4}
            flexDirection={{ sm: "row", xs: "column" }}
          >
            <Grid item flex={{ sm: 2, md: 1 }} sx={{ alignSelf: "center" }}>
              <Grid item>
                <WalletOutlined
                  sx={{ fontSize: { xs: "4rem", md: "6rem" }, fill: "#E20489" }}
                />
              </Grid>
              <Typography
                my={2}
                variant="h3"
                fontWeight={800}
                color={"text.primary"}
              >
                Wallet & Crowdfunding Features
              </Typography>
              <List dense>
                {arr.map((ite) => (
                  <ListItem key={ite.key} dense disableGutters>
                    <ListItemText
                      primaryTypographyProps={{
                        textAlign: "justify",
                        color: "text.info",
                        lineHeight: "2.5rem",
                      }}
                      primary={
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          color={"text.info"}
                          textAlign="justify"
                          sx={{ lineHeight: "2.5rem" }}
                        >
                          {ite.key}: {"  "}
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
            <Grid item flex={1} sx={{ maxHeight: "36rem" }}>
              <Avatar
                src={home03}
                variant="square"
                sx={{
                  "& img": {
                    objectFit: "contain",
                  },
                  width: "100%",
                  borderRadius: "1.3rem",
                  height: "100%",
                }}
              />
            </Grid>
          </Grid>

          <Grid
            my={4}
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
                <Typography
                  variant="h5"
                  textAlign={"center"}
                  fontWeight={500}
                  sx={{ lineHeight: "2.1rem" }}
                  width="100%"
                >
                  CHEERS Official launch is around the corner. By signing up to
                  test the App during our BETA Stage, you’ll provide direct
                  feedback to the CHEERS team then stand a chance to win unique
                  privileges and receive exclusive gifts from the CHEERS team on
                  YOUR special day.
                </Typography>
              </Grid>
            </Grid>

            {/* swipeale */}
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
                    src={image13}
                    style={{ objectFit: "contain", height: "30rem" }}
                  />
                  <img
                    src={image12}
                    style={{ objectFit: "contain", height: "30rem" }}
                  />
                  <img
                    src={image15}
                    style={{ objectFit: "contain", height: "30rem" }}
                  />
                </div>
                <div style={flex}>
                  <img
                    src={image14}
                    style={{ objectFit: "contain", height: "30rem" }}
                  />
                  <img
                    src={image11}
                    style={{ objectFit: "contain", height: "30rem" }}
                  />
                  <img
                    src={service03}
                    style={{ objectFit: "contain", height: "30rem" }}
                  />
                </div>
              </Carousel>
            </Grid>
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
            mt={{ md: "15rem", xs: "3rem" }}
            gap={4}
            id="day"
          >
            <Grid item flex={1}>
              <Avatar
                src={home09}
                variant="square"
                sx={{
                  width: "100%",
                  borderRadius: "1.3rem",
                  height: "100%",
                  maxHeight: "49rem",
                }}
              />
            </Grid>
            <Grid item flex={{ md: 1, sm: 2 }}>
              <Grid
                item
                container
                flexDirection={"column"}
                alignItems={"space-between"}
                sx={{ height: "100%" }}
              >
                <Typography
                  variant="h5"
                  my={2}
                  sx={{
                    lineHeight: "2.1rem",
                    fontSize: { md: "1.8rem", xs: "1.6rem" },
                  }}
                >
                  Get started and enjoy your birthday just the way you want it
                  to be full of love, fun & excitement!!!{" "}
                  <Typography
                    variant="span"
                    fontWeight={600}
                    color={"text.main"}
                  >
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
                            <FormikControl
                              name="name"
                              placeholder="Enter Name"
                            />
                          </Grid>
                          <Grid item container mb={2}>
                            <FormikControl
                              name="email"
                              placeholder="Enter Valid Email"
                            />
                          </Grid>
                        </Grid>
                        <Grid item mt="auto" sx={{ width: "100%" }}>
                          <Button
                            variant="contained"
                            sx={{
                              fontWeight: 700,
                              width: "100%",
                              textTransform: "initial",
                              fontSize: "clamp(1.4rem,2vw,2rem)",
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
            sx={{
              background: "#FFB9EB73",
              mt: { md: "6rem", xs: 4 },
            }}
            id="faq"
          >
            <Grid item sx={{ width: "100%", p: { md: 4, xs: 1 } }}>
              <Typography
                variant="h2"
                textAlign={"center"}
                color="text.primary"
              >
                Explore our{" "}
                <Typography color={"text.main"} variant="span">
                  frequently asked questions (FAQ)
                </Typography>
              </Typography>
              <Typography
                variant="h5"
                my={2}
                color="text.info"
                textAlign={{ md: "center", xs: "justify" }}
                sx={{ fontWeight: 500 }}
                fontSize={{ md: "1.8rem", xs: "1.6rem", lineHeight: "2.1rem" }}
              >
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
                    href="#faq"
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
          <Grid
            item
            container
            my={4}
            rowGap={4}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Grid item flex={1}>
              <Grid item container>
                <Typography
                  variant="h2"
                  fontWeight={700}
                  sx={{ color: "#636262" }}
                >
                  Would you like to be a CHEERS{" "}
                  <Typography variant="span" color={"text.main"}>
                    Vendor, Affiliate or Logistics Partner?
                  </Typography>
                </Typography>
                <Typography
                  color={"text.info"}
                  variant="h5"
                  my={4}
                  fontWeight={500}
                >
                  At CHEERS, we operate a seamless end-to-end process based on
                  efficiency, accountability and service. Send us an email to
                  get in touch with us or subscribe to our newsletter/blog to be
                  updated on our pre-launch/post-launch activity.
                </Typography>
                <Grid item>
                  <Button
                    disableElevation
                    variant="contained"
                    onClick={() => setOpen(true)}
                    color="primary"
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
      <Dialogs
        isOpen={open}
        handleClose={(e) => {
          setOpen(false);
        }}
      >
        <Create heading={"VENDORS REGISTRATION FORM"} />
      </Dialogs>
    </>
  );
};
const Create = () => {
  const handleSubmit = async (values) => {
    const { title, description, propertiesArray } = values;
  };
  const options = [
    {
      key: "Vendor",
      value: "vendor",
    },
    {
      key: "Affliate",
      value: "affliate",
    },
    {
      key: "Logistics",
      value: "logistics",
    },
  ];
  return (
    <Grid item container gap={2} sx={{ pt: 0, height: "100%" }}>
      <Typography
        color="text.primary"
        fontWeight={700}
        width="100%"
        textAlign="center"
        fontSize={{ md: "2rem", xs: "1.5rem" }}
      >
        VENDORS REGISTRATION FORM
      </Typography>
      <Grid item container>
        <Formik
          // validationSchema={validationSchema}
          enableReinitialize
          initialValues={{
            name: "",
            type: "",
            phone: "",
            email: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form style={{ width: "100%" }}>
            <Grid item container gap={2}>
              <Grid item container gap={2} flexWrap={{ md: "nowrap" }}>
                <FormikControl name="name" placeholder="Business Name" />

                <FormikControl
                  name="type"
                  placeholder="Business Type"
                  control={"select"}
                  options={options}
                />
              </Grid>
              <Grid item container gap={2} flexWrap={{ md: "nowrap" }}>
                <FormikControl name="email" placeholder="Email Address" />

                <FormikControl name="phone" placeholder="Phone" />
              </Grid>
              <Grid item container>
                <FormikControl
                  name="message"
                  placeholder="Message"
                  control="textarea"
                />
              </Grid>
              <Grid item container sx={{ mt: 3 }}>
                <Button
                  width="100%"
                  type="submit"
                  disableElevation
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    width: "100%",
                    textTransform: "initial",
                    fontSize: "clamp(1.4rem,8vw,2rem)",
                  }}
                >
                  Submit{" "}
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
