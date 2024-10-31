import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

import "../../components/css/custom-css.css";
import { useState } from "react";

const Multiplication = () => {
  const [multiplication, setMultiplication] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const handleChangedNumber1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber1(Number(event.target.value ?? 0));
  };
  const handleChangedNumber2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber2(Number(event.target.value ?? 0));
  };

  const handleMultiplication = () => {
    setMultiplication(number1 * number2);
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
          startIcon={<CloseIcon />}
          onClick={handleMultiplication}
        >
          Multiplication
        </Button>
      </div>
      <div className="btn__ass__div__control">
        <TextField
          disabled
          id="multiplication-result"
          label="Multiplication Ans"
          variant="outlined"
          type="number"
          value={multiplication}
        />
      </div>
    </>
  );
};
export default Multiplication;
