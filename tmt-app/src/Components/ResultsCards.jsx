import React from "react";
import { Stack } from "@mui/material";
import CustomCard from "./CustomCard";
import { MOCK_DATA } from "../constants/mockData";

function ResultsCards() {
  return (
    <Stack spacing={3}>
      <CustomCard dummyData={MOCK_DATA} />
      <hr />
    </Stack>
  );
}

export default ResultsCards;
