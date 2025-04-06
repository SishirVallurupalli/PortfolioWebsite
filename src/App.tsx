import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import theme from './Components/theme'
import Footer from './Components/Footer'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingTop: '100px' }}>
        <Header />
        

        <Footer />

      </Box>
    </ThemeProvider >
  )
}

export default App
