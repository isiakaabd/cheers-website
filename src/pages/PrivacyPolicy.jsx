import {
  Container,
  Typography,
  Box,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
} from "@mui/material";
import { StarBorder } from "@mui/icons-material";

const PolicyAndTermsContent = () => {
  const first = [
    {
      title: "User Provided Information:",
      sub: " When you register or use the App, you may  provide personal information such as your name, email address, mailing address, birth date and other contact details.",
    },
    {
      title: "Transaction Information:",
      sub: " If you make purchases or contributions through the App, we may collect payment and billing information",
    },
    {
      title: "User Content:",
      sub: "Any content you submit through the App, such as comments, reviews, posts or messages, may be stored by us",
    },
  ];
  const second = [
    {
      title: "Device Information:",
      sub: "We may collect information about your device, including its type, operating system, and unique identifiers",
    },
    {
      title: "Log Data:",
      sub: " We automatically collect certain information when you access and use the App, such as IP address, browser type, pages visited, and interaction with the App's features.",
    },
    {
      title: "Analytics:",
      sub: "We may use third-party analytics tools to gather usage data, which helps us improve the App's functionality and user experience",
    },
  ];
  const third = [
    "Providing, maintaining, and improving the App's features and services.",
    "Personalizing your experience within the App.",
    "Sending you relevant updates, notifications, and promotional materials.",
    "Processing transactions and providing customer support.",
    "Analyzing usage patterns and trends to enhance our services.",
  ];
  const fourth = [
    "providers who assist us in operating the App and providing services to you.",
    "With third parties for marketing and advertising purposes, but only in an aggregated and non-personally identifiable form.",
    "In response to legal obligations, such as a court order or government request.",
    "To protect our rights, privacy, safety, or property, as well as those of our users and the public.",
    "In connection with a business transaction, such as a merger, sale, or acquisition.",
  ];
  const fifth = [
    {
      title: "Access and Correction:",
      sub: "You can review and update your personal information through the App's settings.",
    },
    {
      title: "Opt-Out:",
      sub: "You can opt out of receiving promotional communications by following the instructions provided in the communication.",
    },
    {
      title: "Location Information:",
      sub: "You can control the App's access to your device's location through your device settings.",
    },
  ];
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          Privacy Policy for Cheers
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          fontWeight={600}
        >
          Last Updated: March 2023
        </Typography>
        <Typography variant="body1" paragraph>
          Oriki Technologies Ltd ("we," "us," or "our") is committed to
          protecting the privacy and security of your personal information. This
          Privacy Policy outlines how we collect, use, disclose, and safeguard
          your information when you use Cheers (the "App").
        </Typography>
        <Typography variant="body1" paragraph>
          Please read this Privacy Policy carefully. By using the App, you agree
          to the collection and use of your information as described in this
          Privacy Policy. If you do not agree with the terms of this Privacy
          Policy, please do not use the App.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong> 1. Information We Collect </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We may collect the following types of information when you use the
          App:
        </Typography>
        <List dense subheader={<strong>1.1. Personal Information:</strong>}>
          {first.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "center" }}
                primary={
                  <Typography variant="h5" fontWeight={600}>
                    {item.title}{" "}
                    <Typography variant="span" fontWeight={400}>
                      {item.sub}
                    </Typography>
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <List dense subheader={<strong> 1.2. Usage Information:</strong>}>
          {second.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "justify" }}
                primary={
                  <Typography variant="h5" fontWeight={600}>
                    {item.title}{" "}
                    <Typography variant="span" fontWeight={400}>
                      {item.sub}
                    </Typography>
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <strong> 2. How We Use Your Information</strong>
        <List
          dense
          subheader={
            <Typography variant="h5">
              We use the collected information for various purposes, including:
            </Typography>
          }
        >
          {third.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "justify" }}
                primary={
                  <Typography variant="h5" fontWeight={400}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <strong> 3. How We Share Your Information</strong>
        <List
          dense
          subheader={
            <Typography variant="h5">
              We may share your information in the following situations:{" "}
            </Typography>
          }
        >
          {fourth.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "justify" }}
                primary={
                  <Typography variant="h5" fontWeight={500}>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <strong>4. Your Choices</strong>
        <List
          dense
          subheader={
            <Typography variant="h5">
              You can exercise certain rights regarding your information:
            </Typography>
          }
        >
          {fifth.map((item, idx) => (
            <ListItem dense disablePadding key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: "3rem" }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ textAlign: "justify" }}
                primary={
                  <Typography variant="h5" fontWeight={600}>
                    {item.title}{" "}
                    <Typography variant="span" fontWeight={400}>
                      {item.sub}
                    </Typography>
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>

        <strong>5. Data Security</strong>
        <List dense>
          <ListItem dense disablePadding disableGutters>
            <ListItemText
              primaryTypographyProps={{ textAlign: "justify" }}
              primary={
                <Typography variant="h5" fontWeight={400}>
                  We implement security measures to protect your information
                  from unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the
                  internet or electronic storage is completely secure.
                </Typography>
              }
            />
          </ListItem>
        </List>
        <strong>6. Children's Privacy</strong>
        <List dense>
          <ListItem dense disablePadding disableGutters>
            <ListItemText
              primaryTypographyProps={{ textAlign: "justify" }}
              primary={
                <Typography variant="h5" fontWeight={400}>
                  We may update this Privacy Policy periodically to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons. The "Last Updated" date at the beginning
                  of this Privacy Policy indicates when the policy was last
                  revised.{" "}
                </Typography>
              }
            />
          </ListItem>
        </List>
        <strong>7. Changes to this Privacy Policy</strong>
        <List dense>
          <ListItem dense disablePadding disableGutters>
            <ListItemText
              primaryTypographyProps={{ textAlign: "justify" }}
              primary={
                <Typography variant="h5" fontWeight={400}>
                  We may update this Privacy Policy periodically to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons. The "Last Updated" date at the beginning
                  of this Privacy Policy indicates when the policy was last
                  revised.
                </Typography>
              }
            />
          </ListItem>
        </List>
        <strong>8. Contact Us</strong>
        <List dense>
          <ListItem dense disablePadding disableGutters>
            <ListItemText
              primaryTypographyProps={{ textAlign: "justify" }}
              primary={
                <>
                  <Typography variant="h5" fontWeight={400}>
                    If you have any questions or concerns about this Privacy
                    Policy, please contact us at hello@orikitechnologies.com
                  </Typography>
                  <Typography variant="h5" fontWeight={400}>
                    {" "}
                    By using the App, you acknowledge that you have read and
                    understood this Privacy Policy and agree to its terms.
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>
      </Box>

      {/* Divider */}

      <Divider sx={{ my: 4 }} />
    </Container>
  );
};

export default PolicyAndTermsContent;
