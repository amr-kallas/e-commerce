import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const Links = () => {
  const links = [
    {
      title: "Home",
      icon: <KeyboardArrowDownIcon />,
      listLinks: [
        {
          title: "Dashbord",
        },
        {
          title: "Product",
          icon: <KeyboardArrowRightOutlinedIcon />,
          nestedLinks: ["Edit", "Delete"],
        },
        {
          title: "Order",
        },
        {
          title: "Others",
          icon: <KeyboardArrowRightOutlinedIcon />,
          nestedLinks: ["Foods", "Management"],
        },
      ],
    },
    {
      title: "MegaMenu",
      icon: <KeyboardArrowDownIcon />,
      listLinks: [
        {
          title: "product",
        },
        {
          title: "category",
          icon: <KeyboardArrowRightOutlinedIcon />,
          nestedLinks: ["edit", "delete"],
        },
      ],
    },
    {
      title: "Full Screen Menu",
      icon: <KeyboardArrowDownIcon />,
      listLinks: [
        {
          title: "product",
        },
        {
          title: "category",
          icon: <KeyboardArrowRightOutlinedIcon />,
          nestedLinks: ["edit", "delete"],
        },
      ],
    },
    {
      title: "Pages",
      icon: <KeyboardArrowDownIcon />,
      listLinks: [
        {
          title: "product",
        },
        {
          title: "category",
          icon: <KeyboardArrowRightOutlinedIcon />,
          nestedLinks: ["edit", "delete"],
        },
      ],
    },
    {
      title: "User Account",
      icon: <KeyboardArrowDownIcon />,
      listLinks: [
        {
          title: "product",
        },
        {
          title: "category",
          icon: <KeyboardArrowRightOutlinedIcon />,
          nestedLinks: ["edit", "delete"],
        },
      ],
    },
    {
      title: "Vendor Account",
      icon: <KeyboardArrowDownIcon />,
      listLinks: [
        {
          title: "product",
        },
        {
          title: "category",
          icon: "",
          nestedLinks: [],
        },
      ],
    },
  ];
  return (
    <Stack spacing={3} direction="row" alignItems="center" zIndex={33}>
      {links.map((link) => (
        <Stack
          key={link.title}
          direction="row"
          alignItems="center"
          sx={{
            position: "relative",
            "&:hover .show-in-hover": {
              display: "block",
            },
          }}
        >
          <Typography>{link.title}</Typography>
          {link.icon}
          <Box
            className="show-in-hover"
            sx={{
              position: "absolute",
              left: "50%",
              top: "100%",
              transform: "translateX(-50%)",
              display: "none",
            }}
          >
            <Paper
              sx={{
                mt: 1,
              }}
            >
              <nav aria-label="secondary mailbox folders">
                <List
                  sx={{
                    p: 0,
                  }}
                >
                  {link.listLinks.map((item, index) => (
                    <ListItem
                      key={index}
                      disablePadding
                      sx={{
                        ":hover .show-nested-hover": {
                          display: "block",
                        },
                      }}
                    >
                      <ListItemButton>
                        <ListItemText primary={item.title} />
                        <Box flex={1} />
                        <ListItemIcon sx={{ minWidth: 0 }}>
                          {item.icon}
                        </ListItemIcon>

                        <List
                          sx={{
                            position: "relative",
                          }}
                        >
                          <Box
                            className="show-nested-hover"
                            sx={{
                              position: "absolute",
                              left: 0,
                              bottom: "-62px",
                              display: "none",
                            }}
                          >
                            <Paper sx={{ mx: 3 }}>
                              {item.nestedLinks?.map((nesLink, index) => (
                                <ListItem disablePadding key={index}>
                                  <ListItemButton>
                                    <ListItemText primary={nesLink} />
                                  </ListItemButton>
                                </ListItem>
                              ))}
                            </Paper>
                          </Box>
                        </List>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </nav>
            </Paper>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default Links;
