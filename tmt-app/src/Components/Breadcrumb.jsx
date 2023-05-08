import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import ForwardArrow from "../Images/Forward.png";
import { Link } from "react-router-dom";

function Breadcrumb({ text, page, previousPage }) {
  return (
    <Breadcrumbs
      separator={
        <img
          style={{ width: "24px", margin: "0" }}
          src={ForwardArrow}
          alt="ForwardArrow"
        />
      }
      aria-label="breadcrumb"
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        marginX: {
          xs: "1rem",
          md: "4rem",
        },
      }}
    >
      <Link to={`/${previousPage}`} style={{ textDecoration: "none" }}>
        <Typography
          variant="h6"
          sx={{
            color: "BobaHighlight.main",
            marginRight: {
              xs: "0px",
              sm: "8px",
              md: "16px",
            },
          }}
        >
          All Careers & Majors
        </Typography>
      </Link>
      <Typography
        variant="h6"
        sx={{
          color: "BobaHighlight.main",
          marginLeft: {
            xs: "0px",
            sm: "8px",
            md: "16px",
          },
        }}
      >
        {text} ({page})
      </Typography>
    </Breadcrumbs>
  );
}

export default Breadcrumb;
