import React from 'react';
import { Box, Typography, LinearProgress, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const courses = [
    { name: 'desc', progress: 70 },
    { name: 'CSS', progress: 50 },
    { name: 'Python', progress: 30 },
    { name: 'React', progress: 90 },
    { name: 'JavaScript', progress: 80 },
    { name: 'TypeScript', progress: 60 },
];


const Hints = () => {
    const nav = useNavigate();
    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography>
                Hint: You can use a for loop to multiply A with itself N
                number of times.
                <br />
                Variable aPowerN can be used to store the computed value of
                AN inside the for loop.
                <br />
                <strong>Note:</strong> Please don't change the package name.
            </Typography>
        </Box>
    );
};

export default Hints;