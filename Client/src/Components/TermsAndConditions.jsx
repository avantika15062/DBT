import React from 'react';
import { Container, Typography } from '@mui/material';

export const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Terms & Conditions</Typography>
      <Typography paragraph>
        These are your Terms & Conditions. Explain the rules and guidelines users must agree to.
      </Typography>
      <Typography paragraph>
        Include sections like:
        - Acceptance of Terms
        - Use of Services
        - Termination
        - Governing Law, etc.
      </Typography>
    </Container>
  );
};
