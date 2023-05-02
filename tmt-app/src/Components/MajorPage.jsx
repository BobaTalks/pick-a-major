import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MAJORS_LIST } from "../constants/careerMajorList";

function MajorPage() {
  const params = useParams();
  const [data, setData] = useState([]);

  const searchData = (target) => {
    for (let i = 0; i < MAJORS_LIST.length; i++) {
      if (target === MAJORS_LIST[i].key) {
        setData(MAJORS_LIST[i]);
        console.log(MAJORS_LIST[i]);
      }
    }
  };

  useEffect(() => {
    searchData(params.major);
  }, [params]);

  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {data.name} (Major)
      </Typography>
    </Container>
  );
}

export default MajorPage;
