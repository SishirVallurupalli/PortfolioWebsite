import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const navItems = ['Projects', 'Experience', 'Contact'];

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#141416',
                color: 'white',
                textAlign: 'left', // Footer text aligned left
                py: 4,
                px: 4, // Add padding so content isn't flush with edge
                fontFamily: "'Share Tech Mono', monospace",
            }}
        >
            {/* Nav Buttons - vertically stacked, left aligned */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start', // 👈 left align buttons
                    gap: 1.5,
                    mb: 2,
                }}
            >
                {navItems.map((item) => (
                    <Button
                        key={item}
                        sx={{
                            color: 'white',
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontFamily: "'Share Tech Mono', monospace",
                        }}
                    >
                        {item}
                    </Button>
                ))}
            </Box>

            {/* Footer text */}
            <Typography variant="body2">
                Made by Sishir Vallurupalli
            </Typography>
        </Box>
    );
}
