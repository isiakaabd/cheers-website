import { Typography, Grid } from "@mui/material";

const TermsOfUse = () => {
  return (
    <Grid item container px={2} py={8} gap={4}>
      <Typography variant="h4">Terms of Use</Typography>
      <Typography variant="h5">
        Welcome to Cheers, your friendly chatting platform. By using Cheers, you
        agree to these Terms of Use. Please read them carefully before using the
        app.
      </Typography>
      <Typography variant="h5">User Conduct:</Typography>
      <Typography variant="h5">
        Cheers is designed for positive and respectful communication. You agree
        not to use the app for any harmful, unlawful, or offensive activities.
        Do not engage in harassment, spam, or any form of harmful behavior
        towards others.
      </Typography>
      <Typography variant="h5">Privacy and Data:</Typography>
      <Typography variant="h5">
        We value your privacy and take data protection seriously. Our Privacy
        Policy explains how we collect, use, and store your personal
        information. By using Cheers, you consent to the practices described in
        our Privacy Policy.
      </Typography>
      <Typography variant="h5">Intellectual Property:</Typography>
      <Typography variant="h5">
        The content and features in Cheers, including logos, designs, and text,
        are owned by Cheers and are protected by copyright and intellectual
        property laws. You may not use, reproduce, or distribute our content
        without permission.
      </Typography>
      <Typography variant="h5">Account Security:</Typography>
      <Typography variant="h5">
        You are responsible for maintaining the security of your Cheers account.
        Do not share your account details with others, and promptly notify us if
        you suspect any unauthorized access.
      </Typography>
      <Typography variant="h5">Disclaimer of Warranty:</Typography>
      <Typography variant="h5">
        Cheers is provided "as is" without any warranties. We do not guarantee
        that the app will be error-free, secure, or available at all times. Your
        use of Cheers is at your own risk.
      </Typography>
      <Typography variant="h5">Changes to Terms:</Typography>
      <Typography variant="h5">
        We may update these Terms of Use to reflect changes in our services or
        legal requirements. Any changes will be reflected on this page, and your
        continued use of Cheers constitutes your acceptance of the most recent
        version of these terms.
      </Typography>
      <Typography variant="h5">Contact Us:</Typography>
      <Typography variant="h5">
        If you have any questions or concerns about these Terms of Use or
        Cheers' operation, please contact us at support@cheersapp.com.
      </Typography>
    </Grid>
  );
};

export default TermsOfUse;
