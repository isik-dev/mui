import React, { useState } from "react";
import { Typography, Button, Container, TextField } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import { styled } from "@mui/material/styles";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      console.log(title, details);
    }
  };

  const MyComponent = styled("textfield")({
    backgroundColor: "aliceblue",
    marginBottom: 20,
    marginTop: 20,
    display: "block",
  });
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <MyComponent>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          required
        />
      </MyComponent>
      <MyComponent>
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
        />
      </MyComponent>

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightOutlinedIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};
