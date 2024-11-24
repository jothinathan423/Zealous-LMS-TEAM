import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const CertificatesCard = () => {
  return (
    <Card 
      sx={{
        width: { xs: '100%', md: '30%' },
        borderRadius: '20px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        marginTop: { xs: '20px', md: '0' },
      }}
    >
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{
          backgroundColor: '#4caf50',
          color: '#fff',
          padding: '10px',
          fontSize: { xs: '1.2rem', sm: '1.5rem' },
          textAlign: 'center',
          borderRadius: '20px 20px 0 0',
        }}
      >
        Certificates
      </Typography>
      <CardContent>
        <Box sx={{ padding: '10px' }}>
          <Typography variant="body1" sx={{ marginBottom: '8px', fontWeight: 'bold' }}>
            Achievements
          </Typography>
          <Typography variant="body2">
            - React Development Certificate <br />
            - MERN Stack Mastery <br />
            - Advanced CSS & Design <br />
            - JavaScript Algorithms
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CertificatesCard;