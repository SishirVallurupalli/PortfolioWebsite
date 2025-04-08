import { Box, Link, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import MailIcon from "@mui/icons-material/Mail";

export default function ContactBar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        fontFamily: "'Share Tech Mono', monospace",
        py: 4,
        paddingTop: "50px",
        paddingBottom: "25px",
      }}
    >
      <Link
        href="mailto:sishir.vallurupalli@gmail.com"
        underline="none"
        sx={{ fontSize: "1rem" }}
      >
        sishir.vallurupalli@gmail.com{" "}
        <MailIcon sx={{ fontSize: "1.5rem", verticalAlign: "text-bottom" }} />
      </Link>

      <Typography display={{ xs: "none", md: "block" }}>| |</Typography>

      <Link
        href="https://www.linkedin.com/in/sishir-vallurupalli/"
        target="_blank"
        rel="noopener"
        color="inherit"
        sx={{ fontSize: "1rem" }}
      >
        LinkedIn{" "}
        <OpenInNewIcon
          sx={{ fontSize: "1.5rem", verticalAlign: "text-bottom" }}
        />
      </Link>

      <Typography display={{ xs: "none", md: "block" }}>| |</Typography>

      <Link
        href="https://github.com/SishirVallurupalli"
        target="_blank"
        rel="noopener"
        color="inherit"
        sx={{ fontSize: "1rem" }}
      >
        GitHub{" "}
        <OpenInNewIcon
          sx={{ fontSize: "1.5rem", verticalAlign: "text-bottom" }}
        />
      </Link>
    </Box>
  );
}
