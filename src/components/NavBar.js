import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import wordmark from "../wordmark.png";

export default function NavBar({ onClickShare }) {
  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: "relative",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar style={{ alignItems: "center" }}>
        <div style={{ flexGrow: 1, display: "flex" }}>
          <img src={wordmark} alt="" height="28px"></img>
        </div>
        <IconButton
          onClick={() => {
            onClickShare();
          }}
          style={{ color: "slategray" }}
        >
          <ShareIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
