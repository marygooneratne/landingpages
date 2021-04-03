import React from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "../global.css";
import { v1Theme } from "../utils/styles.js";

function EmailInput(props) {
  const buttonLabel = props.buttonLabel;
  const textFieldLabel = "Email address";
  const inputTextColor = v1Theme.palette.primary.main;
  const inputBackgroundColor = "transparent";
  const buttonBackgroundColor = v1Theme.palette.secondary.main;
  const buttonTextColor = v1Theme.palette.primary.main;
  const useTextFieldStyles = makeStyles(() => ({
    inputRoot: {
      textTransform: "none",
      boxShadow: "none",
      border: "1px solid",
      borderColor: inputTextColor,
      color: inputTextColor,
      overflow: "hidden",
      borderRadius: 5,
      "& label .MuiFormLabel-root": {
        color: "white",
      },
      backgroundColor: inputBackgroundColor,
      "&:hover": {
        backgroundColor: inputBackgroundColor,
      },
      "&$focused": {
        backgroundColor: inputBackgroundColor,
      },
    },
    input: {
      color: inputTextColor,
    },
    labelRoot: {
      color: inputTextColor,
    },
  }));

  function EmailTextField(props) {
    const classes = useTextFieldStyles();
    return (
      <TextField
        variant="filled"
        label={textFieldLabel}
        className="email-input-text-field"
        InputProps={{
          classes: { root: classes.inputRoot },
          disableUnderline: true,
        }}
        InputLabelProps={{ classes: { root: classes.labelRoot } }}
        {...props}
      />
    );
  }
  const StyledButton = withStyles(() => ({
    root: {
      textTransform: "none",
      boxShadow: "none",
      overflow: "hidden",
      borderRadius: 5,
      color: buttonTextColor,
      backgroundColor: buttonBackgroundColor,
      "&:hover": {
        backgroundColor: buttonBackgroundColor,
      },
      "&$focused": {
        backgroundColor: buttonBackgroundColor,
      },
    },
    focused: {},
  }))(Button);

  function EmailButton(props) {
    return (
      <StyledButton className="email-input-button" variant="filled" {...props}>
        {buttonLabel}
      </StyledButton>
    );
  }

  return (
    <Box className="email-input-container columns">
      <EmailTextField />
      <EmailButton />
    </Box>
  );
}
export default EmailInput;
