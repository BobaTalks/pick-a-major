import { React, Fragment } from "react";
import { FlexContainer } from "../Styling/CustomStyling.js";
import { Box, Typography } from "@mui/material";
import { CAREERS_LIST, MAJORS_LIST } from "../constants/careerMajorList";

function MajorCareerList() {
  return (
    <FlexContainer
      sx={{
        alignItems: "flex-start",
        marginY: "2rem",
        paddingX: "0.5rem",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ paddingX: "1rem" }}>
        <Typography variant="CustomHeading3" sx={{ marginBottom: "1rem" }}>
          Majors
        </Typography>
        <Fragment>
          {MAJORS_LIST.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "0.25rem 0",
              }}
            >
              {item.name}
            </div>
          ))}
        </Fragment>
      </Box>
      <Box sx={{ paddingX: "1rem" }}>
        <Typography variant="CustomHeading3" sx={{ marginBottom: "1rem" }}>
          Careers
        </Typography>
        <Fragment>
          {CAREERS_LIST.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "0.25rem 0",
              }}
            >
              {item.name}
            </div>
          ))}
        </Fragment>
      </Box>
    </FlexContainer>
  );
}

export default MajorCareerList;
