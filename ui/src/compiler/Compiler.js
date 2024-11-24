import React, { useEffect, useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Paper,
    Tabs,
    Tab,
    Button,
    Box,
    TextField,
    IconButton,
    ThemeProvider,
} from "@mui/material";
import { PlayArrow, Refresh } from "@mui/icons-material";
import MonacoEditor from "react-monaco-editor";
import Header from "../components/header";
import Describtion from "./Describtion";
import Testcase from "./Testcase";
import Hints from "./Hints";
import Level from "./Solution";
import { darkTheme, lightTheme } from "./Theme";



function New() {
    

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [theme, setTheme] = useState("vs-light"); // Default theme is light
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        setTheme((prevTheme) => (prevTheme === "vs-light" ? "vs-dark" : "vs-light"));
    };

    const [code, setCode] = useState("// Write your code here...\n\n\n\n\n\n\n\n\n");
    
    //jothi ithu tab change ku
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };


    //ithu varaikum athe operation
    const editorOptions = {
        selectOnLineNumbers: true,
        minimap: { enabled: false },
    };

    const resetEditor = () => {
        setCode("// Write your Python code here...\n\n\n\n\n\n\n\n\n"); // Reset to default code
    };
    const handleEditorChange = (newValue) => {
        setCode(newValue);
    };
    const [seconds, setSeconds] = useState(0); // State to track elapsed time

    useEffect(() => {
        // Start the timer when the page loads
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        // Cleanup the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);

    const formatTime = () => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    
    return (

            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Box>
            {/* Header */}
            <Header/>
            {/* Content */}
            <Container maxWidth="xl" style={{ marginTop: "1rem" }}>
                <Grid container spacing={2} style={{ height: "calc(100vh - 64px)" }}>
                    {/* Left Panel */}
                        <Grid item xs={12} md={6} lg={6} style={{
                            height: "100%"}}>
                        <Paper
                            variant="outlined"
                            style={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: "11px" 
                            }}
                        >
                            {/* Header Section */}
                            <Box
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    borderBottom: "1px solid lightgray",
                                    bgcolor: "#0383C7",
                                    color: "white",
                                    borderRadius: "11px" 
                                }}
                            >
                                <Typography variant="h6">Section-2</Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                        {formatTime()}   <Typography variant="contained" onClick={toggleTheme}>
                                            {isDarkMode ? '🔅' : '🌙'}
                                            {theme === "vs-light" ? "Dark" : "Light"}
                                        </Typography>
                                </Typography>
                            </Box>

                            {/* Tabs Section */}
                            <Tabs
                                value={selectedTab}
                                onChange={handleTabChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                textColor="primary"
                                indicatorColor="primary"
                            >
                                <Tab label="DESCRIPTION" />
                                <Tab label="TEST CASE" />
                                <Tab label="HINTS" />
                                <Tab label="Level" />
                            </Tabs>

                            {/* Content Section (Scrollable) */}
                            <Box
                                sx={{ p: 2, flex: 1, overflow: "auto" }}
                            >
                                {selectedTab === 0 && <Describtion />}
                                {selectedTab === 1 && <Testcase />}
                                {selectedTab === 2 && <Hints />}
                                {selectedTab === 3 && <Level />}
                                
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Right Panel */}
                    <Grid item xs={12} md={6} lg={6} style={{ height: "100%", }}>
                        <Paper
                            variant="outlined"
                            style={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: "11px" 
                            }}
                        >
                            {/* Header for Code Editor */}
                            <Box
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    borderBottom: "1px solid lightgray",
                                    bgcolor: "#0383C7",
                                    color: "white",
                                    borderRadius: "11px" 

                                }}
                            >
                                <Typography variant="h6">Code Editor</Typography>
                                <Box>
                                    <IconButton color="white">
                                            <Refresh onClick={resetEditor} />
                                    </IconButton>
                                    <IconButton color="white">
                                        <PlayArrow />
                                    </IconButton>
                                </Box>
                            </Box>

                            {/* Monaco Editor Section */}
                            <Box sx={{ flex: 1 }}>
                                <MonacoEditor
                                    width="100%"
                                    height="100%"
                                    language="python"
                                    theme={theme}
                                    value={code}
                                    options={editorOptions}
                                    onChange={handleEditorChange}
                                />
                            </Box>

                            {/* Buttons Section */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    p: 2,
                                    borderTop: "1px solid lightgray",
                                }}
                            >
                                    <Button variant="contained" color="warning" onClick={resetEditor}>
                                    Reset
                                </Button>
                                <Button variant="contained" color="primary">
                                    Submit
                                </Button>
                                <Button variant="contained" color="success">
                                    Next
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
            </Box>
        </ThemeProvider>
    );
}

export default New;
