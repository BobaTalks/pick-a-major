import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { FlexContainer, PrimaryBtn } from "../Styling/CustomStyling.js";
import SearchIcon from "@mui/icons-material/Search";

function CareerGuide() {
  const [selection, setSelection] = useState("Majors");
  const handleChoice = (event, newSelection) => {
    if (newSelection !== null) {
      setSelection(newSelection);
    }
  };

  return (
    <Grid
      container
      sx={{
        paddingTop: "7.5rem",
        overflow: "hidden",
        minHeight: "100vh",
        width: "100%",
        paddingX: "5rem",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Grid item xs={8}>
        <FlexContainer
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              marginX: "0",
              paddingTop: "2rem",
            }}
          >
            <Typography variant="CustomHeading1">Majors/Careers</Typography>
            <Typography variant="CustomSubHeading" sx={{ marginLeft: "5rem" }}>
              Explore majors, careers, and jobs
            </Typography>
          </Box>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginY: "3rem",
            }}
          >
            <ToggleButtonGroup
              value={selection}
              exclusive
              aria-label="major or career"
              onChange={handleChoice}
            >
              <ToggleButton
                variant="customToggleStyle"
                value="Majors"
                disableRipple="True"
              >
                <Typography variant="CustomHeading3">Majors</Typography>
              </ToggleButton>
              <ToggleButton variant="customToggleStyle" value="Careers">
                <Typography variant="CustomHeading3">Careers</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
            <TextField
              id="filled=search"
              type="search"
              sx={{ "& .MuiInputBase-input": { padding: "6px" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "30px",
                },
              }}
            />
          </Container>
        </FlexContainer>
      </Grid>
      <Grid item xs={4}>
        <FlexContainer sx={{ flexDirection: "column" }}>
          <Box sx={{ width: "60%", textAlign: "center" }}>
            <FlexContainer>
              <Typography variant="CustomTitle">Major Guide</Typography>
            </FlexContainer>
            <FlexContainer>
              <Typography variant="CustomHeading2">
                Explore majors, careers, & more
              </Typography>
            </FlexContainer>
          </Box>
          <PrimaryBtn>
            <Typography>Take the Quiz</Typography>
          </PrimaryBtn>
        </FlexContainer>
      </Grid>
    </Grid>
  );
}

export default CareerGuide;
