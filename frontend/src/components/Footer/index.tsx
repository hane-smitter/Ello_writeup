import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <Divider sx={{ width: "100%" }} />
      <Typography variant="body1" component="span">
        Beautiful work by
      </Typography>
      &nbsp;
      <Link href="https://lookupzach.netlify.app">Zacky</Link>
    </div>
  );
}

export default Footer;
