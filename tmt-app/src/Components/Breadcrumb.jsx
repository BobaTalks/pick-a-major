import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import ForwardArrow from "../Images/Forward.png";
import { Link } from "react-router-dom";

function Breadcrumb({ previousPage }) {
  const [category, major, parent, path] = previousPage;
  const breadcrumbs = [
    { url: `/${path}`, label: `${parent}` },
    { label: `${major} (${category})` },
  ];

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
        marginX: {
          xs: "1rem",
          md: "4rem",
        },
      }}
    >
      {breadcrumbs.map((breadcrumb, idx) => {
        return breadcrumb?.url ? (
          <Typography
            key={idx}
            component={Link}
            to={breadcrumb.url}
            variant="h6"
            sx={{
              color: "BobaHighlight.main",
              marginRight: {
                xs: "0px",
                sm: "8px",
                md: "16px",
              },
              textDecoration: "none",
            }}
          >
            {breadcrumb.label}
          </Typography>
        ) : (
          <Typography
            key={idx}
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
            {breadcrumb.label}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
}

export default Breadcrumb;
