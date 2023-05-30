import { Grid } from "@mui/material";
import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  FacebookIcon,
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
    Icon: WhatsappIcon,
    Button: WhatsappShareButton,
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
