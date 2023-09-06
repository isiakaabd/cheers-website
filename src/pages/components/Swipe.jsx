import { useTheme } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { bg07, bg05, bg06, contact } from "~assets";
import { useLocation } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const pagesAcc = [
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
  // {
  //   text: "Talk to us, we are here 24/7 ",
  //   subText:
  //     "Providing an exciting new way to be the center of attention as you celebrate your special day is personal for us, so we’d love to hear from you.",
  //   route: "/contact",
  //   imgPath: bg,
  // },
  {
    text: "Show Love",
    subText: null,
    route: "/service",
    imgPath: bg05,
  },
  // {
  //   text: "Events Gallery",
  //   subText: null,
  //   route: "/gallery",
  //   imgPath: bg01,
  // },
];

function Swipe({ activeStep, setActiveStep }) {
  const theme = useTheme();

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        position: "absolute",
        height: { md: "100vh", xs: "100dvh" },
      }}
    >
      {pathname === "/contact" ? (
        <Avatar
          src={contact}
          variant="square"
          sx={{ width: "100%", height: "100%" }}
        />
      ) : (
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {pagesAcc.map((step, index) => (
            <div key={step.route}>
              {Math.abs(activeStep - index) <= 5 ? (
                <Box
                  component="img"
                  sx={{
                    height: "100vh",
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.text}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      )}
    </Box>
  );
}

export default Swipe;
