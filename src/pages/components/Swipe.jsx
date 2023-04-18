import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { bg, bg01, bg06, bg03, bg02 } from "@assets";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const pagesAcc = [
  {
    text: "Frequently Asked Question (FAQ)",
    subText:
      "If others are asking, then you're probably thinking the same thing. Here are some answers that would help.",
    route: "/faq",
    imgPath: bg03,
  },
  {
    text: "Make all your Birthday wishes come true",
    subText: null,
    route: "/",
    imgPath: bg06,
  },
  {
    text: "Talk to us, we are here 24/7 ",
    subText:
      "Providing an exciting new way to be the center of attention as you celebrate your special day is personal for us, so we’d love to hear from you.",
    route: "/contact",
    imgPath: bg,
  },
  {
    text: "What we do",
    subText: null,
    route: "/service",
    imgPath: bg02,
  },
  {
    text: "Events Gallery",
    subText: null,
    route: "/gallery",
    imgPath: bg01,
  },
];

function Swipe({ activeStep, setActiveStep }) {
  const theme = useTheme();

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{ width: "100%", flexGrow: 1, position: "absolute", height: "100vh" }}
    >
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
    </Box>
  );
}

export default Swipe;
