import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import "../../components/css/custom-css.css";
import React, { useState } from "react";

const Addition = () => {
  const [addition, setAddition] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const handleChangedNumber1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber1(Number(event.target.value ?? 0));
  };
  const handleChangedNumber2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber2(Number(event.target.value ?? 0));
  };

  const handleAddition = () => {
    setAddition(number1 + number2);
  };

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
          onChange={handleChangedNumber1}
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
          onChange={handleChangedNumber2}
        />
      </div>
      <div className="btn__ass__div__control">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddition}
        >
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
