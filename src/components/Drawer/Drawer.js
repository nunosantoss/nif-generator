"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import MUIDrawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoMdMenu } from "react-icons/io";
import { Typography } from "@mui/material";
import { drawerData } from "@/data/menu/drawer";

export default function Drawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, bgcolor: "#082f49", height: "100lvh" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List sx={{ color: "#ffffff" }}>
        <Typography
          sx={{
            pl: "3rem",
            py: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          GERADOR DE NIFS
        </Typography>
        <Divider sx={{ bgcolor: "rgba(0,0,0,.6)", marginX: "1rem" }} />
        <Box sx={{p: '.5rem', m: '.5rem'}}>
          {drawerData.map((text, index) => (
            <ListItem key={text} sx={{bgcolor: '#00151c', my: '.5rem', borderRadius: '.25rem'}} disablePadding>
              <ListItemButton
                onClick={() => window.open(text.action, "_blank")}
              >
                <ListItemIcon sx={{ color: "#ffffff" }}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.menu} />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </List>
      <Divider sx={{ bgcolor: "rgba(0,0,0,.6)", marginX: "1rem" }} />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <IoMdMenu color="#ffffff" size={24} />
      </Button>
      <MUIDrawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </MUIDrawer>
    </div>
  );
}
