import React from "react";
import { Typography, Button, Container } from "@mui/material";

import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

export const Create = () => {
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

      <Button
        onClick={() => console.log("You clicked me!")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightOutlinedIcon />}
        /* disableElevation */
      >
        Submit
      </Button>

      {/* <Button type="submit">Submit</Button>
      <Button type="submit" variant="outlined" color="secondary">
        Submit
      </Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>Four</Button>
      </ButtonGroup> */}

      {/* icons */}
      {/* <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="primary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="error" fontSize="small" />
      <AcUnitOutlinedIcon color="disabled" fontSize="small" /> */}
    </Container>
  );
};
