import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <footer>
      <Typography align="center" color="text.secondary" component="p">
        &copy; {new Date().getFullYear()} Oneline CtrlV
      </Typography>
    </footer>
  );
}
