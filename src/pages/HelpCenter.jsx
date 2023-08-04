import { Typography, Grid } from "@mui/material";

const HelpCenterPage = () => {
  return (
    <Grid item container px={2} py={8} gap={4}>
      <Typography variant="h4">Help Center</Typography>

      <div>
        <Typography variant="h5">Frequently Asked Questions (FAQs)</Typography>
        <Typography variant="h6">
          Here are some common questions and answers about Cheers:
        </Typography>
        <Typography variant="h6">
          Q: How do I create an account on Cheers?
        </Typography>
        <Typography variant="h6">
          A: To create an account, download the Cheers app from the App Store or
          Google Play Store, and then follow the on-screen instructions to sign
          up with your email or phone number.
        </Typography>
        <Typography variant="h6">Q: How do I add friends on Cheers?</Typography>
        <Typography variant="h6">
          A: You can add friends by searching for their usernames or by scanning
          their unique QR codes. Once you find them, simply send a friend
          request, and upon acceptance, you'll be connected on Cheers.
        </Typography>
        <Typography variant="h6">
          Q: Can I change my username on Cheers?
        </Typography>
        <Typography variant="h6">
          A: Yes, you can change your username. Go to your profile settings and
          select the "Edit Profile" option. From there, you can update your
          username and save the changes.
        </Typography>
        {/* Add more FAQs as needed */}
      </div>

      <div>
        <Typography variant="h5">Contact Us</Typography>
        <Typography variant="h6">
          If you need further assistance or have any questions, please don't
          hesitate to reach out to our support team. We're here to help!
        </Typography>
        <Typography variant="h6">Email: support@cheersapp.com</Typography>
        <Typography variant="h6">Phone: +1 (123) 456-7890</Typography>
        <Typography variant="h6">
          Our support team is available 24/7 to assist you with any issues you
          may encounter while using Cheers. Feel free to contact us via email or
          phone, and we'll get back to you as soon as possible.
        </Typography>
        <Typography variant="h6">
          You can also visit our website for additional resources and FAQs:
          www.cheersapp.com/help
        </Typography>
      </div>
    </Grid>
  );
};

export default HelpCenterPage;
