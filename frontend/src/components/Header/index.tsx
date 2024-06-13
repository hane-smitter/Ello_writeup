import { useCallback, useEffect, useState, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

import styles from "./styles.module.scss";
import SmScreenDrawer from "./SmScreenDrawer";
import NavLinks from "./NavLinks";

function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const chckbxRef = useRef<HTMLInputElement | null>(null);

  // console.log({ matches });

  const handleMobileDrawer = useCallback(
    (boolStatus: boolean) => {
      setMobileDrawerOpen(boolStatus);
      if (chckbxRef.current) chckbxRef.current.checked = boolStatus;
    },
    [setMobileDrawerOpen]
  );

  useEffect(() => {
    if (matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, [matches]);

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <AppBar sx={{ backgroundColor: "common.white" }} elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img src="/ello-logo.svg" alt="ello logo" width="54px" />
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          {isSmallScreen ? (
            <IconButton onClick={() => handleMobileDrawer(true)}>
              <Box component="span" className={styles.menuContainer}>
                <input type="checkbox" id="menu-chck-bx" ref={chckbxRef} />
                <Box className="bar" component="span"></Box>
              </Box>
            </IconButton>
          ) : (
            <NavLinks />
          )}
        </Toolbar>
      </AppBar>
      <Offset />

      <SmScreenDrawer
        mobileDrawerOpen={mobileDrawerOpen}
        handleMobileDrawer={handleMobileDrawer}
      />
    </>
  );
}

export default Header;
