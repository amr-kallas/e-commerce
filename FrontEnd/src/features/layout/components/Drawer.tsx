import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, ListItemIcon } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcons from "../../../components/icons/CloseIcons";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({ top: false });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = () => (
    <Box sx={{ width: "auto", height: "100vh" }} role="presentation">
      <List
        sx={{
          width: 0.5,
          margin: "110px auto 0",
        }}
      >
        <ListItem>
          <ListItemText />
          <CloseIcons close={toggleDrawer("top", false)}/>
        </ListItem>
        {[
          "Home",
          "MegaMenu",
          "Full Screen Menu",
          "Pages",
          "User Account",
          "Vendor Account",
        ].map((text) => (
          <ListItem
            key={text}
            disablePadding
            onClick={toggleDrawer("top", false)}
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            <ListItemButton
              sx={{
                "&:hover": {
                  background: "none",
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
            <ListItemIcon>
              <KeyboardArrowDownIcon />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="top" open={state["top"]}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
