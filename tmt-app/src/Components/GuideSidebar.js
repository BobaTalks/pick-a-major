import React from "react";
import { FlexContainer, PrimaryBtn } from "../Styling/CustomStyling.js";
import { Box, Typography } from "@mui/material";

function GuideSidebar({ toggleButton }) {
  return (
    <FlexContainer sx={{ flexDirection: "column" }}>
      <Box
        sx={{
          width: {
            xs: "175px",
            sm: "225px",
            xl: "275px",
          },
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h1">Major Guide</Typography>
        </Box>
        <Box>
          <Typography variant="h3">Explore majors, careers, & more</Typography>
        </Box>
      </Box>
      <PrimaryBtn
        disabled={toggleButton}
        sx={{
          backgroundColor: toggleButton ? "InactiveGrey2.main" : "Matcha.main",
          "&.MuiButtonBase-root": {
            padding: {
              xs: "1rem 2.5rem",
              xl: "1rem 3.25rem",
            },
          },
        }}
      >
        <Typography variant="h4">Take the Quiz</Typography>
      </PrimaryBtn>
    </FlexContainer>
  );
}

export default GuideSidebar;
