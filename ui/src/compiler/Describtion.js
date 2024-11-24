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


const Describtion = () => {
    const nav = useNavigate();
    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            
            <Typography variant="h6" gutterBottom>
                <strong>1. For Loop</strong>
            </Typography>
            <Typography variant="body2" gutterBottom>

                Write Java program to write execute the power funtion using command line arugements
                <br />
                Command Line arguements take 2 arguement.one is the base value and another one is the power value
                <br />
            </Typography>
        </Box>
    );
};

export default Describtion;