import { StarBorder } from "@mui/icons-material";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
} from "@mui/material";

const TermsOfUse = () => {
  const one = [
    "You must be 15 years or older to use the App, depending on the legal age in your jurisdiction.",
    "You agree to use the App only for lawful purposes and in compliance with all applicable laws and regulations.",
    "You are responsible for maintaining the security of your account and the confidentiality of your login credentials.",
    "You shall not engage in any unauthorized use, reproduction, or distribution of the App's content.",
    "You shall not attempt to interfere with the security, functionality, or availability of the App.",
    "You shall not use the App to transmit any harmful or offensive content, including malware or inappropriate materials.",
    "You shall not engage in any conduct that could disrupt other users' experience or harm our reputation.",
  ];
  const two = [
    "Any content you submit to the App, including comments, reviews, messages, and other materials, must comply with our content guidelines and applicable laws.",
    "By submitting content, you grant us a non-exclusive, royalty-free, worldwide, perpetual, and irrevocable license to use, modify, reproduce, distribute, and display your content within the App.",
  ];
  const three = [
    "All content and materials available in the App, including but not limited to text, graphics, logos, icons, images, audio clips, software, trademarks, copyrights, and trade secrets are the property of Oriki Technologies Ltd or its licensors and are protected by intellectual property laws.",
    "You may not use, reproduce, distribute, or modify any content from the App without obtaining prior written permission from us.",
  ];
  const four = [
    "Your use of the App is also governed by our Privacy Policy, which outlines how we collect, use, disclose, and protect your personal information. By using the App, you consent to the practices described in the Privacy Policy.",
  ];
  const five = [
    "The App is provided 'as is' and 'as available' without any warranties, representations, or guarantees of any kind, either express or implied.",
    "To the fullest extent permitted by applicable law, Oriki Technologies Ltd and its affiliates, directors, employees, and agents shall not be liable for any direct, indirect, incidental, specia or consequential damages arising out of or in any way connected to your use of the App.",
  ];
  const six = [
    "The App may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.",
  ];
  const seven = [
    "We reserve the right to suspend or terminate your access to the App at our discretion, without notice or liability, for any reason, including if you violate these Terms. Upon termination, your right to use the App will immediately cease.",
  ];
  const eight = [
    "We may update these Terms from time to time. Any changes will be effective when posted on this page. Your continued use of the App after changes to the Terms indicates your acceptance of the modified Terms.",
  ];
  const nine = [
    "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law principles.",
  ];
  const ten = [
    "If you have any questions about these Terms, please contact us at hello@orikitechnologies.com.",
  ];

  return (
    <Container maxWidth="lg">
      {/* Privacy Policy */}
      <Box my={4}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          Terms of Use for Cheers
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          fontWeight={600}
        >
          Effective Date: March 2023
        </Typography>
        <Typography variant="body1" paragraph>
          These Terms of Use ("Terms") govern your use of the Cheers mobile
          application ("App") provided by Oriki Technologies Ltd ("we," "our,"
          or "us"). By using the App, you agree to be bound by these Terms. If
          you do not agree with these Terms, please refrain from using the App.
        </Typography>
        <List dense subheader={<strong>1. Use of the App</strong>}>
          {one.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "center" }}
                primary={
                  <Typography variant="span" fontWeight={400}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <List dense subheader={<strong>2. User Content</strong>}>
          {two.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "center" }}
                primary={
                  <Typography variant="span" fontWeight={400}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <List dense subheader={<strong>3. Intellectual Property</strong>}>
          {three.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "center" }}
                primary={
                  <Typography variant="span" fontWeight={400}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <List dense subheader={<strong>4. Privacy</strong>}>
          {four.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "center" }}
                primary={
                  <Typography variant="span" fontWeight={400}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <List
          dense
          subheader={
            <strong>5. Disclaimers and Limitation of Liability</strong>
          }
        >
          {five.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "center" }}
                primary={
                  <Typography variant="span" fontWeight={400}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <List dense subheader={<strong>6. Third-Party Links</strong>}>
          {six.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "center" }}
                primary={
                  <Typography variant="span" fontWeight={400}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <List dense subheader={<strong>7. Termination</strong>}>
          {seven.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "center" }}
                primary={
                  <Typography variant="span" fontWeight={400}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <List dense subheader={<strong> 8. Changes to Terms</strong>}>
          {eight.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "center" }}
                primary={
                  <Typography variant="span" fontWeight={400}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <List dense subheader={<strong> 8. Changes to Terms</strong>}>
          {nine.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "center" }}
                primary={
                  <Typography variant="span" fontWeight={400}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <List dense subheader={<strong> 9. Governing Law</strong>}>
          {ten.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "center" }}
                primary={
                  <Typography variant="span" fontWeight={400}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>

        <Typography variant="body1" paragraph>
          By using the App, you agree to abide by these Terms of Use.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfUse;
