import { Box, Typography } from '@mui/material';
import * as React from 'react';

export default function Projects() {
    return <Box sx={{
        padding: '50px', px: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }}>
        <Typography variant='h2'>
            Projects
        </Typography>
    </Box>
}