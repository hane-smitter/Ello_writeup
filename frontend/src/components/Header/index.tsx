import { useCallback, useEffect, useState, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

import styles from "./styles.module.scss";
import SmScreen from "./SmScreen";

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
      console.log("is matche1: ", matches);
      setIsSmallScreen(true);
    } else {
      console.log("is matche2: ", matches);

      setIsSmallScreen(false);
    }
  }, [matches]);

  return (
    <>
      <AppBar>
        <Toolbar>
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
            <IconButton onClick={() => setMobileDrawerOpen(true)}>
              <Box component="label" htmlFor="menu-chck-bx">
                <Box component="span" className={styles.menuContainer}>
                  <input type="checkbox" id="menu-chck-bx" ref={chckbxRef} />
                  <Box className="bar" component="span"></Box>
                </Box>
              </Box>
            </IconButton>
          ) : (
            "A normal node rendered"
          )}
        </Toolbar>
      </AppBar>

      <SmScreen
        mobileDrawerOpen={mobileDrawerOpen}
        handleMobileDrawer={handleMobileDrawer}
      />
    </>
  );
}

export default Header;
