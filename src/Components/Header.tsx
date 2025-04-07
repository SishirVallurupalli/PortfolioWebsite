import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";

export default function Header() {
  const headerButtons = ["Projects", "Experience", "Contact"];
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgb(35, 45, 63, 0.2)",
        backdropFilter: "blur(8px)",
        paddingX: 4,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LaptopIcon />
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Share Tech Mono', monospace",
            }}
          >
            Sishir Vallurupalli
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            paddingY: 1,
            paddingX: 3,
            borderRadius: 1,
            backgroundColor: "transparent",
          }}
        >
          {headerButtons.map((item) => {
            return (
              <Button
                color="inherit"
                sx={{
                  fontSize: "1.5rem",
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                {item}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
