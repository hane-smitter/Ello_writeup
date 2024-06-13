// import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";

import links from "../Links";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

function SmScreenDrawer({
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
        onClick={() => handleMobileDrawer(false)}
      >
        <Offset />
        <List>
          {links.map(({ name, href }, index) => (
            <ListItem key={name} disablePadding>
              <ListItemButton LinkComponent={Link} href={href} target="_blank">
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={name} sx={{ color: "common.black" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default SmScreenDrawer;
