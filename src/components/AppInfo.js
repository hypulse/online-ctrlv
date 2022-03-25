import Typography from "@mui/material/Typography";

export default function AppInfo() {
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        🖨️
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        모바일 환경에서도 같은 문자를 여러 번 복사하고 붙여넣을 수 있습니다!
      </Typography>
    </div>
  );
}
