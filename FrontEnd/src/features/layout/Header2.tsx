import {
  Badge,
  BadgeProps,
  Box,
  Container,
  IconButton,
  InputBase,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchMenu from "./components/SearchMenu";

const Header2 = () => {
  const Search = styled("div")(({ theme }) => ({
    flexGrow:0.4,
    position: "relative",
    borderRadius: 22,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    border: "1px solid",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <Container
      sx={{
        mt: 3,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack alignItems="center">
        <ShoppingCartOutlinedIcon />
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          E-commerce
        </Typography>
      </Stack>
      <Box>
        <Search sx={{
          display:"flex",
          overflow:"hidden",
          justifyContent:"space-between"
        }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchMenu/>
        </Search>
      </Box>
      <Stack direction="row" alignItems="center" gap={2}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header2;
