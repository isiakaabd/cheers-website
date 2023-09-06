import { Container, Typography, Box } from "@mui/material";

const TermsOfUse = () => {
  return (
    <Container maxWidth="lg">
      {/* Privacy Policy */}
      <Box my={4}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: 600 }}
        >
          Privacy Policy for Cheers
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Last Updated: March 2023
        </Typography>
        <Typography variant="body1" paragraph>
          These Terms of Use ("Terms") govern your use of the Cheers mobile
          application ("App") provided by Oriki Technologies Ltd ("we," "our,"
          or "us"). By using the App, you agree to be bound by these Terms. If
          you do not agree with these Terms, please refrain from using the App.
        </Typography>
        <Typography variant="h6" gutterBottom>
          1. Use of the App
        </Typography>
        <Typography variant="body1" paragraph>
          You must be 15 years or older to use the App, depending on the legal
          age in your jurisdiction.
        </Typography>
        <Typography variant="body1">
          You agree to use the App only for lawful purposes and in compliance
          with all applicable laws and regulations.{" "}
        </Typography>
        <Typography variant="body1" paragraph>
          You are responsible for maintaining the security of your account and
          the confidentiality of your login credentials.{" "}
        </Typography>
        <Typography variant="body1">
          You shall not engage in any unauthorized use, reproduction, or
          distribution of the App's content.{" "}
        </Typography>
        <Typography variant="body1" paragraph>
          You shall not attempt to interfere with the security, functionality,
          or availability of the App.
        </Typography>
        <Typography variant="body1">
          You shall not use the App to transmit any harmful or offensive
          content, including malware or inappropriate materials.{" "}
        </Typography>
        <Typography variant="body1" paragraph>
          You shall not engage in any conduct that could disrupt other users'
          experience or harm our reputation.{" "}
        </Typography>
        {/* 2 */}

        <Typography variant="h6">
          <strong>2. User Content</strong>
        </Typography>

        <Typography variant="body1">
          Any content you submit to the App, including comments, reviews,
          messages, and other materials, must comply with our content guidelines
          and applicable laws.
        </Typography>
        <Typography variant="body1" paragraph>
          By submitting content, you grant us a non-exclusive, royalty-free,
          worldwide, perpetual, and irrevocable license to use, modify,
          reproduce, distribute, and display your content within the App.
        </Typography>
        <Typography variant="h6">
          <strong>3. Intellectual Property</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          All content and materials available in the App, including but not
          limited to text, graphics, logos, icons, images, audio clips,
          software, trademarks, copyrights, and trade secrets are the property
          of Oriki Technologies Ltd or its licensors and are protected by
          intellectual property laws.
        </Typography>
        <Typography variant="body1">
          You may not use, reproduce, distribute, or modify any content from the
          App without obtaining prior written permission from us.{" "}
        </Typography>
        <Typography variant="h6">
          <strong>4. Privacy</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          Your use of the App is also governed by our Privacy Policy, which
          outlines how we collect, use, disclose, and protect your personal
          information. By using the App, you consent to the practices described
          in the Privacy Policy.
        </Typography>
        <Typography variant="h6">
          <strong>5. Disclaimers and Limitation of Liability</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          The App is provided "as is" and "as available" without any warranties,
          representations, or guarantees of any kind, either express or implied.
        </Typography>
        <Typography variant="body1" paragraph>
          To the fullest extent permitted by applicable law, Oriki Technologies
          Ltd and its affiliates, directors, employees, and agents shall not be
          liable for any direct, indirect, incidental, special, or consequential
          damages arising out of or in any way connected to your use of the App.
        </Typography>
        <Typography variant="h6">
          <strong>6. Third-Party Links</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          The App may contain links to third-party websites or services that are
          not owned or controlled by us. We have no control over, and assume no
          responsibility for, the content, privacy policies, or practices of any
          third-party websites or services.
        </Typography>
        <Typography variant="h6">
          <strong>7. Termination</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to suspend or terminate your access to the App at
          our discretion, without notice or liability, for any reason, including
          if you violate these Terms. Upon termination, your right to use the
          App will immediately cease.{" "}
        </Typography>
        <Typography variant="h6">
          <strong>8. Changes to Terms</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We may update these Terms from time to time. Any changes will be
          effective when posted on this page. Your continued use of the App
          after changes to the Terms indicates your acceptance of the modified
          Terms.{" "}
        </Typography>
        <Typography variant="h6">
          <strong>9. Governing Law</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          These Terms shall be governed by and construed in accordance with the
          laws of the Federal Republic of Nigeria, without regard to its
          conflict of law principles.
        </Typography>
        <Typography variant="h6">
          <strong>10. Contact Us</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about these Terms, please contact us at
          hello@orikitechnologies.com.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfUse;
