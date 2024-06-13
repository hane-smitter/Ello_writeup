// import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import links from "../Links";

function SmScreen({
  mobileDrawerOpen,
  handleMobileDrawer,
}: {
  mobileDrawerOpen: boolean;
  handleMobileDrawer: (boolStatus: boolean) => void;
}) {
  console.log({ mobileDrawerOpen });
  //   const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <Drawer open={mobileDrawerOpen} onClose={() => handleMobileDrawer(false)}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        //   onClick={() => setDrawerOpen(false)}
      >
        <List>
          {links.map(({ name }, index) => (
            <ListItem key={name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {links.map(({ name }, index) => (
            <ListItem key={name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default SmScreen;
