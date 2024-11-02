import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

import Addition from "../Addition";
import Subtraction from "../Subtraction";
import Multiplication from "../Multiplication";
import Division from "../Division";

const Parent = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" data-testid="parent-container">
        <Box
          data-testid="parent-box"
          component="section"
          sx={{
            p: 2,
            border: "1px dashed grey",
          }}
        >
          <Divider>Addition of two number</Divider>
          <Addition />
          <Divider>Subtraction between two number</Divider>
          <Subtraction />
          <Divider>Multiplication of two number</Divider>
          <Multiplication />
          <Divider>Division of two number</Divider>
          <Division />
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default Parent;
