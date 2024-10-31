import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import "../../components/css/custom-css.css";
import { useState } from "react";

const Addition = () => {
  const [addition, setAddition] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  return (
    <>
      <div className="arg__top__div__control">
        <TextField
          required
          id="number1"
          label="Number1"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />

        <TextField
          required
          id="number2"
          label="Number2"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      </div>
      <div className="btn__ass__div__control">
        <Button variant="contained" startIcon={<AddIcon />}>
          Addition
        </Button>
      </div>
      <div className="btn__ass__div__control">
        <TextField
          disabled
          id="addition-result"
          label="Addition Ans"
          variant="outlined"
          type="number"
          value={addition}
        />
      </div>
    </>
  );
};
export default Addition;
