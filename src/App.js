import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppInfo from "./components/AppInfo";
import CopyInput from "./components/CopyInput";
import CopyButton from "./components/CopyButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { webShareApi } from "./modules";

function onClickShare() {
  const url = "https://hypulse.github.io/online-ctrlv";
  const text =
    "모바일 환경에서도 같은 문자를 여러 번 복사하고 붙여넣을 수 있습니다!";
  webShareApi(url, text);
}

export default function App() {
  return (
    <>
      <CssBaseline />
      <NavBar onClickShare={onClickShare}></NavBar>
      <Box sx={{ minHeight: "100vh" }}>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ pb: 4, pt: 8 }}>
              <Container maxWidth="sm">
                <Box sx={{ pl: 4, pr: 4 }}>
                  <AppInfo></AppInfo>
                </Box>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="md">
              <Box sx={{ p: 1 }}>
                <CopyInput></CopyInput>
              </Box>
              <Box sx={{ p: 1 }}>
                <CopyButton></CopyButton>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ pt: 8, pb: 1 }}>
        <Footer></Footer>
      </Box>
    </>
  );
}
