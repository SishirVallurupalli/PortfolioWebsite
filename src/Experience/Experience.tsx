import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ExperienceBoxes from './ExperienceBoxes';

export default function Experience() {
    return <Box sx={{
        padding: '50px', px: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }}>
        <Typography variant='h2'>
            Experience
        </Typography>
        <ExperienceBoxes />
    </Box>
}