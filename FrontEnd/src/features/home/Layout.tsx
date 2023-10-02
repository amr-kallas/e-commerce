import { Box, useTheme } from "@mui/material";
import { Header1, Header2, Header3,Footer } from "../layout";
import ScrollToTop from "../../constants/ScrollToTop";
import {Hero,IconSection,Products} from "./index" 
const Layout = () => {
  const theme=useTheme()
  return (
    <Box>
      <Header1 />
      <Header2 />
      <Header3 />
      <Box bgcolor={theme.palette.info.light} pt={1} mt={3}>
        <Hero />
        <IconSection />
        <Products/>
        <Footer/>
      </Box>
      <ScrollToTop/>
    </Box>
  );
};

export default Layout;
