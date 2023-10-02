import { Box, Fab, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
const ScrollToTop = () => {
    const trigger=useScrollTrigger()
  return (
    <Zoom in={trigger}>
      <Box
        sx={{
          position: "fixed",
          bottom: 10,
          right: 20,
        }}
        onClick={()=>{
            window.scrollTo(0,0)
        }}
      >
        <Fab color="primary" aria-label="add">
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;
