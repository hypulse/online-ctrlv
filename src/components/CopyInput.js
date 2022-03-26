import TextField from "@mui/material/TextField";
import { useState } from "react";
const LENGTH_LIMIT = 500;

const useInput = () => {
  const [text, setText] = useState("");
  const onChagne = (e) => {
    const {
      target: { value },
    } = e;
    if (value.length <= LENGTH_LIMIT) {
      setText(value);
    } else {
      setText(value.substr(0, LENGTH_LIMIT));
    }
  };
  return { text, onChagne };
};

export default function CopyInput() {
  const textValue = useInput();
  return (
    <div>
      <TextField
        id="text-value"
        fullWidth
        multiline
        rows={8}
        placeholder="복사할 텍스트를 입력하세요."
        onChange={textValue.onChagne}
        value={textValue.text}
      />
    </div>
  );
}
