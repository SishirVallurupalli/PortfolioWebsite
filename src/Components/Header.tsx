import { AppBar, Toolbar, Box, Button } from "@mui/material";

export default function Header() {
  const headerButtons = ["Projects", "Experience", "Contact"];
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",

        boxShadow: "none",
        borderBottom: "none",
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
          {/* <LaptopIcon />
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Share Tech Mono', monospace",
            }}
          >
            Sishir Vallurupalli
          </Typography> */}
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            paddingY: 1,
            paddingX: 3,
            borderRadius: 1,
            backgroundColor: "rgba(34, 34, 34, 0.5)",
            backdropFilter: "blur(8px)",
          }}
        >
          {headerButtons.map((item) => {
            return (
              <Button sx={{ color: "text.primary", fontSize: "1rem" }}>
                {item}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
