import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Container, Grid, Toolbar, Button, Typography } from "@mui/material";
import { bg07, bg05, bg06 } from "~assets";
import { useLocation } from "react-router-dom";

// const images = [
//   {
//     images: img05,
//     text: "Our Vision",
//     subtext: " To enhance the human potential through innovative technology",
//   },
//   {
//     images: img01,
//     text: " Our Mission",
//     subtext:
//       "At Oriki, we want to showcase and maximize human possibilities by leveraging technology to build creative and innovative products while keeping our customers at the center stage.",
//   },
// ];
const images = [
  {
    text: "Create exceptional moments",
    subText: null,
    route: "/faq",
    imgPath: bg07,
  },
  {
    text: "Make all your Birthday wishes come true",
    subText: null,
    route: "/",
    imgPath: bg06,
  },

  {
    text: "Show Love",
    subText: null,
    route: "/service",
    imgPath: bg05,
  },
];

const ImageSlider = () => {
  const { pathname } = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Automatically go to the next image
      handleNextClick();
    }, 8000); // Change image every 5 seconds

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []); // Run this effect only once

  useEffect(() => {
    // Animate the background image sliding across the page
    controls.start({
      backgroundPositionX: ["0%", "100%"],
      transition: { duration: 50 },
    });
  }, [currentImageIndex, controls]);

  return (
    <motion.div
      key={currentImageIndex}
      initial={{ opacity: 1, backgroundPositionX: "0%" }}
      animate={controls}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(${
          pathname === "/contact"
            ? images[0]
            : images[currentImageIndex].imgPath
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        position: "absolute",
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Toolbar
          sx={{
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: pathname === "/contact" ? 0 : 3,
              },
            }}
            style={{ textAlign: "left", color: "#fff", width: "100%" }}
            viewport={{ once: true }}
          >
            <Grid
              item
              container
              flexDirection={"column"}
              sx={{
                zIndex: 400,
                maxWidth: { md: "70%", xs: "80vw" },
                mx: "auto",
              }}
              alignItems={"center"}
            >
              <Typography variant="h1" textAlign={"center"} gutterBottom>
                {pathname === "/contact"
                  ? "Talk to us, we are here 24/7 "
                  : images[currentImageIndex].text}{" "}
              </Typography>
              {(images[currentImageIndex].subText ||
                pathname === "/contact") && (
                <Typography variant="h5" textAlign={"center"} color={"#fff"}>
                  {pathname === "/contact"
                    ? "Providing an exciting new way to be the center of attention as you celebrate your special day is personal for us, so we’d love to hear from you."
                    : images[currentImageIndex].subText}
                </Typography>
              )}
              {pathname !== "/contact" && pathname !== "/terms-of-use" && (
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
              )}
            </Grid>
          </motion.p>
          <Typography
            variant="h3"
            textAlign="justify"
            width="100%"
            sx={{
              fontWeight: 500,
              maxWidth: { md: "75%", xs: "100%", sm: "90%" },
              mr: "auto",
              color: "#fff",
            }}
          >
            {images[currentImageIndex].subText}
          </Typography>
        </Toolbar>
      </Container>
    </motion.div>
  );
};

export default ImageSlider;
