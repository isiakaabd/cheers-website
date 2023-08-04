import { Typography, Grid } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Grid item container px={2} py={8} gap={4}>
      <Typography variant="h4">Privacy Policy</Typography>
      <Typography variant="h5">
        Welcome to Cheers, your go-to messaging platform. At Cheers, we are
        committed to protecting your privacy and ensuring the security of your
        personal information. This Privacy Policy explains what information we
        collect from you and how we use it while you use our chatting app.
      </Typography>
      <Typography variant="h5">Personal Information:</Typography>
      <Typography variant="h5">
        When you create an account on Cheers, we may collect your email address,
        username, and profile picture to set up your profile and help you
        connect with friends. Rest assured that your personal information is
        securely stored, and we do not share it with any third parties.
      </Typography>
      <Typography variant="h5">Chat Messages:</Typography>
      <Typography variant="h5">
        Your chat messages are end-to-end encrypted, meaning they are securely
        stored and only accessible to you and the intended recipients. We do not
        have access to the content of your messages, and we do not store them on
        our servers after they have been delivered.
      </Typography>
      <Typography variant="h5">Data Security:</Typography>
      <Typography variant="h5">
        We implement industry-standard security measures to protect your
        personal information from unauthorized access, alteration, disclosure,
        or destruction. Our data encryption and secure authentication mechanisms
        ensure the safety and confidentiality of your data.
      </Typography>
      <Typography variant="h5">Third-Party Services:</Typography>
      <Typography variant="h5">
        Cheers may use third-party services for analytics and bug tracking.
        These services may collect anonymous data to help us improve our app's
        performance and user experience. However, they do not have access to
        your personal information or chat messages.
      </Typography>
      <Typography variant="h5">Changes to Privacy Policy:</Typography>
      <Typography variant="h5">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices and services. Any changes will be reflected on this
        page, and we encourage you to review this page periodically for any
        updates. By continuing to use Cheers, you accept and agree to the most
        recent version of this Privacy Policy.
      </Typography>
      <Typography variant="h5">Contact Us:</Typography>
      <Typography variant="h5">
        If you have any questions or concerns about our Privacy Policy or how we
        handle your personal information, please contact us at
        support@Cheers.com.
      </Typography>
    </Grid>
  );
};

export default PrivacyPolicy;
