import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SentIcon from "@material-ui/icons";
import Navbar from "./Navbar";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "&.MuiOutlinedInput-root": {
      "&.fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  return (
    <Box component="div">
      <Grid container justify="center">
        <Box component="form">
          <Typography varinat="h5">Let's get in touch...</Typography>
          <InputField
            fullWidth={true}
            label="name"
            varinat="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="email"
            varinat="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="message"
            varinat="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <Button variant="outlined" fullWidth={true}>
            Send
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
