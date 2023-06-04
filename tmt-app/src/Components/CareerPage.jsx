import React from "react";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { CAREERS_LIST } from "../utils/constants";
function CareerPage() {
  const params = useParams();
  const data = CAREERS_LIST[params.career];
  return (
    <Container sx={{ minWidth: "70%" }}>
      <Typography
        variant="h1"
        sx={{
          margin: "2rem auto",
          textAlign: "center",
        }}
      >
        {data.name} (Career)
      </Typography>
    </Container>
  );
}

export default CareerPage;
