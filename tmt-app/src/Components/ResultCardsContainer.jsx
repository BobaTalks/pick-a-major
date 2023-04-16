import React from "react";
import { Stack } from "@mui/material";
import ResultCards from "./ResultCards";
import { MOCK_DATA } from "../constants/mockData";

function ResultCardsContainer() {
  return (
    <Stack spacing={3}>
      <ResultCards cardData={MOCK_DATA} />
      <hr />
    </Stack>
  );
}

export default ResultCardsContainer;
