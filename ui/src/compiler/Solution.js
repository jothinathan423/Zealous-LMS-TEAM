import React, { useState } from 'react';
import { Box, Typography, LinearProgress, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IconButton, Dialog, DialogTitle, DialogContent, Slider} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const courses = [
    { name: 'desc', progress: 70 },
    { name: 'CSS', progress: 50 },
    { name: 'Python', progress: 30 },
    { name: 'React', progress: 90 },
    { name: 'JavaScript', progress: 80 },
    { name: 'TypeScript', progress: 60 },
];


const Level = () => {
    
    const nav = useNavigate();
    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography>
                Medium Level Problem
            </Typography>
            {/* <Typography variant="body1" style={{ fontSize: `${fontSize}px` }}>
                Adjust the font size using the settings icon.
            </Typography> */}

            {/* Open Settings Dialog */}
            {/* <IconButton onClick={handleDialogOpen} aria-label="font size settings" style={{ marginTop: "10px" }}>
                <SettingsIcon />
            </IconButton> */}

            {/* Dialog for Font Size Adjustment */}
            {/* <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle>Adjust Font Size</DialogTitle>
                <DialogContent>
                    <Box sx={{ width: 300, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Slider
                            value={fontSize}
                            onChange={handleSliderChange}
                            aria-labelledby="font-size-slider"
                            min={10}
                            max={50}
                            step={1}
                            marks={[
                                { value: 10, label: "10px" },
                                { value: 50, label: "50px" },
                            ]}
                            valueLabelDisplay="auto"
                        />
                        <Typography variant="caption">Font Size: {fontSize}px</Typography>
                    </Box>
                </DialogContent>
            </Dialog> */}

        </Box>
    );
};

export default Level;