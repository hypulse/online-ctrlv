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
        π¨οΈ
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        λͺ¨λ°μΌ νκ²½μμλ κ°μ λ¬Έμλ₯Ό μ¬λ¬ λ² λ³΅μ¬νκ³  λΆμ¬λ£μ μ μμ΅λλ€!
      </Typography>
    </div>
  );
}
