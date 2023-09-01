import { InstagramIcon } from "@assets/index";
import { Grid } from "@mui/material";
import {
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  FacebookIcon,
  InstapaperIcon,
  FacebookShareButton,
} from "react-share";

const socialItems = [
  {
    Icon: FacebookIcon,
    Button: FacebookShareButton,
  },
  {
    Button: LinkedinShareButton,
    Icon: LinkedinIcon,
  },
  {
    Icon: TwitterIcon,
    Button: TwitterShareButton,
  },
  {
    Icon: InstapaperIcon,
    Button: FacebookShareButton,
  },
];

const Socials = ({ fill, iconFillColor }) => {
  return (
    <Grid item width={"80%"}>
      <Grid item container justifyContent="space-between">
        {socialItems.map((social, index) => (
          <social.Button url={"#"} quote={"#"} color="#fff" key={index}>
            <social.Icon
              size={28}
              round
              sx={{ color: "#fff", backgroundColor: "#fff", fontSize: 28 }}
              iconFillColor={iconFillColor}
              bgStyle={{ fill }}
            />
          </social.Button>
        ))}
      </Grid>
    </Grid>
  );
};
Socials.defaultProps = {
  fill: "#fff",
  iconFillColor: "#6A1347",
};
export default Socials;
