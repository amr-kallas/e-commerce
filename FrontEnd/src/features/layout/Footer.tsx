import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#283445",
        p: "12px",
        mt: 3,
      }}
    >
      <Typography color={"HighlightText"} variant="h6">
        Designed and Developed by{" "}
        <Typography
          color="#FF7790"
          sx={{ display: "inline", fontSize: "1.25rem" }}
        >
          Amr Kallas
        </Typography>{" "}
        @2023
      </Typography>
    </Box>
  );
};

export default Footer;
