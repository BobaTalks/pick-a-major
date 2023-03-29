import React from "react";
import BobaBotLarge from "../Images/art/boba_bot_Large.svg";
import { Box, Typography } from "@mui/material";

function BobaBot({ text }) {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "inline-flex",
        position: "relative",
      }}
    >
      <img src={BobaBotLarge} alt={"Mascot Icon"} />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          height: "40%",
          left: "15%",
          position: "absolute",
          top: "10%",
          width: "70%",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default BobaBot;
