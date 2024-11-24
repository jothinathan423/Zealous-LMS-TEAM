import React from 'react';
import { Box, Typography, LinearProgress, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const courses = [
    { name: 'testcase', progress: 70 },
    { name: 'CSS', progress: 50 },
    { name: 'Python', progress: 30 },
    { name: 'React', progress: 90 },
    { name: 'JavaScript', progress: 80 },
    { name: 'TypeScript', progress: 60 },
];


const Testcase = () => {
    const nav = useNavigate();
    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
                1. For Loop
            </Typography>
            <Typography variant="body2" gutterBottom>

                <strong>Sample Test Cases</strong>
                <br />
                Test case 1
                <br />
                Command line arguments: 2 8
                <br />
                APowerN: = 256
                <br />
                Test case 2
                <br />
                Command line arguments: 10 5
                <br />
                APowerN: = 100000
                <br />

                {[...Array(20)].map((_, i) => (
                    <div key={i}>
                        APowerN: = 256
                        <br />
                        Test case {i + 3}
                        <br />
                        Command line arguments: 10 5
                        <br />
                        APowerN: = 100000
                        <br />
                    </div>
                ))}
                <br />
                
            </Typography>

        </Box>
    );
};

export default Testcase;