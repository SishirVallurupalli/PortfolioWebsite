import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "'Share Tech Mono', monospace",
    },
    palette: {
        mode: 'dark',
        background: {
            default: '#141416',
            paper: '#141416',
        },
        text: {
            primary: '#ffffff',
        },
    },
});

export default theme;