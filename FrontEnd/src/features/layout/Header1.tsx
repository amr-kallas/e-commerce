import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useColorMode } from "../../constants/toggleTheme";
import storage from "../../utils/storage";
import LanguageMenu from "./components/LanguageMenu";
const Header1 = () => {
  const theme = useTheme();
  const colorMode = useColorMode();
  return (
    <Box sx={{ bgcolor: "#283445" }}>
      <Container>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography
              sx={{
                bgcolor: "#D23F57",
                padding: "6px 8px",
                borderRadius: "12px",
                margin: "10px 0",
                fontSize: 12,
                fontWeight: "bold",
                color: "white",
              }}
            >
              HOT
            </Typography>
            <Typography
              sx={{
                color: "white",
              }}
            >
              From Express Shopping
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <IconButton
              onClick={() => {
                colorMode.toggleColorMode();
                storage.setMode(
                  theme.palette.mode == "light" ? "dark" : "light"
                );
              }}
              sx={{ color: "white" }}
            >
              {theme.palette.mode == "light" ? (
                <WbSunnyIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
            <LanguageMenu />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "white",
                gap: "12px",
                svg: {
                  width: 22,
                  cursor: "pointer",
                },
              }}
            >
              <TwitterIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
