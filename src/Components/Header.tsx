import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { navItems, handleScroll } from "./navUtilities";

export default function Header() {
  const headerButtons = navItems;
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",

        boxShadow: "none",
        borderBottom: "none",
        display: { xs: "none", sm: "flex" },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
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
              <Button
                key={item.id}
                sx={{ color: "text.primary", fontSize: "1rem" }}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
