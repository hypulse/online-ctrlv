import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppInfo from "./components/AppInfo";
import CopyInput from "./components/CopyInput";
import CopyButton from "./components/CopyButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar></NavBar>
      <Box sx={{ minHeight: "100vh" }}>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ pt: 6, pb: 4 }}>
              <Container maxWidth="sm">
                <AppInfo></AppInfo>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="md">
              <Box sx={{ p: 2 }}>
                <CopyInput></CopyInput>
              </Box>
              <Box sx={{ p: 2 }}>
                <CopyButton></CopyButton>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ pt: 6, pb: 4 }}>
        <Footer></Footer>
      </Box>
    </div>
  );
}
