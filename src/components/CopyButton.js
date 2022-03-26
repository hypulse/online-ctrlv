import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import NativeSelect from "@mui/material/NativeSelect";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { copyToClipboard } from "../modules";

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
        <NativeSelect
          id="select-value"
          defaultValue={100}
          sx={{ minHeight: "40px" }}
        >
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
  function onCLickCopy() {
    const textValue = document.querySelector("#text-value").value;
    const selectValue = parseInt(document.querySelector("#select-value").value);
    if (textValue != "") {
      let t = "";
      for (var i = 0; i < selectValue; i++) {
        t += textValue;
      }
      copyToClipboard(t, "클립보드에 텍스트가 복사되었습니다.");
    }
  }

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<ContentCopyIcon />}
        sx={{ minHeight: "40px" }}
        disableElevation
        onClick={() => {
          onCLickCopy();
        }}
        fullWidth
      >
        복사하기
      </Button>
    </div>
  );
}
