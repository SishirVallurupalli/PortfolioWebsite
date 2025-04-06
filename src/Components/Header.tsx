import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";

export default function Header() {
  const headerButtons = ["Projects", "Experience", "Contact"];
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "blur(8px)",
        paddingX: 4,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 1.5,
          backgroundColor: "transparent",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontSize: "2rem",
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
                  fontSize: "2rem",
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
