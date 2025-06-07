import React from 'react';
import { Container, Typography } from '@mui/material';

export const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Privacy Policy</Typography>
      <Typography paragraph>
        This is your Privacy Policy. Here you describe what user data you collect,
        how it's used, stored, and protected.
      </Typography>
      <Typography paragraph>
        You can add more detailed sections here like:
        - Data collection
        - Cookies
        - Third-party services
        - User rights, etc.
      </Typography>
    </Container>
  );
};
