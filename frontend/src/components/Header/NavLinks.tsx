import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import links from "./Links";

function NavLinks() {
  return (
    <Box component="nav" role="presentation">
      <Box component="ol" sx={{ display: "flex" }}>
        {links.map((lnk) => (
          <Box component="li" sx={{ listStyle: "none" }}>
            <Link
              href={lnk.href}
              target={"_blank"}
              sx={({ palette }) => ({
                display: "block",
                padding: "5px 10px",
                color: palette.common.black,
                textDecoration: "none",
                transition: "background-color 400ms linear",
                "&:hover": {
                  backgroundColor: palette.primary.light,
                },
              })}
            >
              {lnk.name}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default NavLinks;
