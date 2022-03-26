import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";

export default function NavBar({ onClickShare }) {
  return (
    <div>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }} noWrap>
            Online CtrlV
          </Typography>
          <IconButton
            onClick={() => {
              onClickShare();
            }}
          >
            <ShareIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
