"use client";

import React from 'react';
import {Button} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Index = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#000000",
            }
        },
    });

    return (
        <div className="ActionContainer">
            <h1 className="ActionTitle">Learn More About Rocky Mountain Remodels</h1>
            <ThemeProvider theme={theme}>
                <Button className="ActionBtn" href="/contact">Contact Us</Button>
            </ThemeProvider>
        </div>
    );
};

export default Index;