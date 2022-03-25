import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import NativeSelect from "@mui/material/NativeSelect";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function CopyButton() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <A></A>
        </Grid>
        <Grid item xs={12} sm={6}>
          <B></B>
        </Grid>
      </Grid>
    </div>
  );
}

function A() {
  const options = [10, 50, 100, 500, 1000];
  return (
    <div>
      <FormControl fullWidth>
        <NativeSelect defaultValue={100} sx={{ minHeight: "40px" }}>
          {options.map((item, idx) => (
            <option value={item} key={idx}>
              {item}번
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

function B() {
  return (
    <div>
      <Button
        variant="contained"
        startIcon={<ContentCopyIcon />}
        sx={{ minHeight: "40px" }}
        fullWidth
      >
        복사하기
      </Button>
    </div>
  );
}
