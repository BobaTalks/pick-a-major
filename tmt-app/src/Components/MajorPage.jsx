import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { MAJORS_LIST } from "../utils/constants";
import Breadcrumb from "./Breadcrumb";
import { DetailCard } from "../Styling/CustomStyling";

function MajorPage() {
  const params = useParams();
  let data = [];

  const searchData = (target) => {
    data = MAJORS_LIST[`"${target}"`];
  };

  searchData(params.major);
  return (
    <Container sx={{ minWidth: "70%" }}>
      <Breadcrumb
        breadcrumbs={[
          { url: "/", label: "Home" },
          { label: `${data.name} (Major)` },
        ]}
      />
      <Typography
        variant="h1"
        sx={{
          margin: "2rem auto",
          textAlign: "center",
        }}
      >
        {data.name} (Major)
      </Typography>
      <Grid container>
        <Grid item>
          <DetailCard>
            <Typography variant="h3" sx={{ paddingBottom: "1.5rem" }}>
              What is{" "}
              {["a", "e", "i", "o", "u"].includes(data.name[0].toLowerCase())
                ? "an "
                : "a "}
              {data.name} Major?
            </Typography>
            <Typography variant="body">{data.desc}</Typography>
          </DetailCard>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MajorPage;
