import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const styleProps = {
  circle: {
    "& .MuiCircularProgress-circle": {
      color: "#137a7f",
    },
    "& .MuiCircularProgress-svg": {
      width: "10rem",
      height: "10rem",
      display: "block",
      margin: "-0.2rem -3.8rem",
    },
  },
};

const StyledBox = styled(Box)(({ boxfor }) => ({
  ...(boxfor === "container" && {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20rem",
    height: "20rem",
  }),

  ...(boxfor === "value" && {
    position: "relative",
    left: "-2.2rem",
    top: "0.1rem",
    width: "5rem",
    height: "5rem",
  }),
}));

const StyledH2 = styled("h2")({
  color: "beige",
  margin: "1.5rem auto",
});

export default function ProgressWithLabel(props) {
  const { value } = props;

  return (
    <StyledBox boxfor="container">
      <CircularProgress
        sx={styleProps.circle}
        variant="determinate"
        value={value}
        thickness={4.5}
      />

      <StyledBox boxfor="value">
        <StyledH2>{`${Math.round(value)}%`}</StyledH2>
      </StyledBox>
    </StyledBox>
  );
}
