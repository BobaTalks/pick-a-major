import React from "react";
import { Stack } from "@mui/material";
import CustomCard from "./CustomCard";

function ResultsCards() {
  const dummyData = [
    {
      id: 0,
      name: "Education",
      desc: "testing",
      icon: "emotional_intelligence",
    },
    {
      id: 1,
      name: "Economics and Business",
      desc: "test fdasf afas fsadf dsf dsf edsf ds fsdaf sd f asfsd fea fgdsffdsf dfasdf ds fsdafsdf fgsdaf ased fasd few gasef sWEAFGASDFAS FDFSA DFA FSADF EAFSDASD FGREAASDFG EF GRasdfga gadfaefadf asf ",
      icon: "chemistry",
    },
  ];
  return (
    <Stack
      spacing={3}
      sx={{
        width: "100%",
        "&::after": {
          content: "''",
          width: "90%",
          margin: "3rem auto",
          border: "1px solid black",
        },
      }}
    >
      <CustomCard dummyData={dummyData} />
    </Stack>
  );
}

export default ResultsCards;
