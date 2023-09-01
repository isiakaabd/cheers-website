import React from "react";
import { Container, Typography, Box, Link, Divider } from "@mui/material";

const PolicyAndTermsContent = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
          Privacy Policy for Cheers
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Last Updated: March 2023
        </Typography>
        <Typography variant="body1" paragraph>
          Oriki Technologies Ltd ("we," "us," or "our") is committed to
          protecting the privacy and security of your personal information. This
          Privacy Policy outlines how we collect, use, disclose, and safeguard
          your information when you use Cheers (the "App").
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong> 1. Information We Collect </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We may collect the following types of information when you use the
          App:
        </Typography>
        <Typography variant="body1">
          <strong>1.1. Personal Information:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          User Provided Information: When you register or use the App, you may
          provide personal information such as your name, email address, mailing
          address, birth date and other contact details.
        </Typography>
        <Typography variant="body1">
          <strong>Transaction Information:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          If you make purchases or contributions through the App, we may collect
          payment and billing information
        </Typography>
        <Typography variant="body1">
          <strong>User Content:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          Any content you submit through the App, such as comments, reviews,
          posts or messages, may be stored by us
        </Typography>
        {/* 2 */}

        <Typography variant="body1">
          <strong>1.2. Usage Information:</strong>
        </Typography>

        <Typography variant="body1">
          <strong>Device Information:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We may collect information about your device, including its type,
          operating system, and unique identifiers.{" "}
        </Typography>
        <Typography variant="body1">
          <strong>Log Data:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We automatically collect certain information when you access and use
          the App, such as IP address, browser type, pages visited, and
          interaction with the App's features.
        </Typography>
        <Typography variant="body1">
          <strong>Analytics:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We may use third-party analytics tools to gather usage data, which
          helps us improve the App's functionality and user experience.
        </Typography>

        {/* 2 */}
        <Typography variant="h6" gutterBottom>
          <strong>2. How We Use Your Information</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We use the collected information for various purposes, including:
        </Typography>

        <Typography variant="body1">
          Providing, maintaining, and improving the App's features and services.{" "}
        </Typography>
        <Typography variant="body1">
          Personalizing your experience within the App.{" "}
        </Typography>
        <Typography variant="body1">
          Sending you relevant updates, notifications, and promotional
          materials.{" "}
        </Typography>
        <Typography variant="body1">
          Processing transactions and providing customer support.
        </Typography>
        <Typography variant="body1">
          Analyzing usage patterns and trends to enhance our services.{" "}
        </Typography>

        {/*3 */}

        {/* 2 */}
        <Typography variant="h6" gutterBottom>
          <strong>3. How We Share Your Information </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We may share your information in the following situations:{" "}
        </Typography>
        <Typography variant="body1">
          With service providers who assist us in operating the App and
          providing services to you.{" "}
        </Typography>
        <Typography variant="body1">
          With third parties for marketing and advertising purposes, but only in
          an aggregated and non-personally identifiable form.{" "}
        </Typography>
        <Typography variant="body1">
          In response to legal obligations, such as a court order or government
          request.
        </Typography>
        <Typography variant="body1">
          To protect our rights, privacy, safety, or property, as well as those
          of our users and the public.
        </Typography>
        <Typography variant="body1">
          In connection with a business transaction, such as a merger, sale, or
          acquisition.
        </Typography>

        <Typography variant="h6" gutterBottom>
          <strong> 4. Your Choices</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          You can exercise certain rights regarding your information:{" "}
        </Typography>
        <Typography variant="body1">
          <strong>Access and Correction:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          You can review and update your personal information through the App's
          settings.
        </Typography>
        <Typography variant="body1">
          <strong>Opt-Out: </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          You can opt out of receiving promotional communications by following
          the instructions provided in the communication.
        </Typography>
        <Typography variant="body1">
          <strong>Location Information: </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          You can control the App's access to your device's location through
          your device settings.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong> 5. Data Security </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We implement security measures to protect your information from
          unauthorized access, alteration, disclosure, or destruction. However,
          no method of transmission over the internet or electronic storage is
          completely secure.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong> 6. Children's Privacy </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          The App is not intended for use by individuals under the age of 15. We
          do not knowingly collect personal information from children without
          parental consent. If you believe we have collected information from a
          child, please contact us.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong> 7. Changes to this Privacy Policy </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this Privacy Policy periodically to reflect changes in
          our practices or for other operational, legal, or regulatory reasons.
          The "Last Updated" date at the beginning of this Privacy Policy
          indicates when the policy was last revised.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong> 8. Contact Us </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <Link href="mailto:hello@orikitechnologies.com">
            hello@orikitechnologies.com
          </Link>{" "}
          By using the App, you acknowledge that you have read and understood
          this Privacy Policy and agree to its terms.
        </Typography>
      </Box>

      {/* Divider */}

      <Divider sx={{ my: 4 }} />
    </Container>
  );
};

export default PolicyAndTermsContent;
