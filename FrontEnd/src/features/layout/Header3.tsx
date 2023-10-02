import { Container, useMediaQuery } from "@mui/material";
import CategoryMenu from "./components/CategoryMenu";
import TemporaryDrawer from "./components/Drawer";
import Links from "./components/Links";

const Header3 = () => {
  const isMeduimScreen = useMediaQuery("(min-width:1050px)");
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt:3,
      }}
    >
      <CategoryMenu />
      {!isMeduimScreen ? <TemporaryDrawer />:<Links/>}
    </Container>
  );
};

export default Header3;
