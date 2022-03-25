import TextField from "@mui/material/TextField";

export default function CopyInput() {
  return (
    <div>
      <TextField
        fullWidth
        multiline
        rows={8}
        placeholder="복사할 텍스트를 입력하세요."
      />
    </div>
  );
}
