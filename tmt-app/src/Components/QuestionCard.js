import React, { useState } from "react";
import "../Styling/Home.css";
import { Typography, Grid, Box } from "@mui/material";
import { CustomTheme } from "../Styling/CustomStyling";

const QuestionCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const style = {
    margin: "0.6rem",
    padding: "1rem",
    gap: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "240px",
    minHeight: "152px",
    boxShadow: "6px 6px 16px rgba(0, 0, 0, 0.16)",
    borderRadius: "36px",
    flex: "none",
    flexGrow: 0,
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
  };

  if (isSelected) {
    style.border = "none";
    style.background = CustomTheme.palette.ThaiTea.main;
    style.color = "white";
  } else {
    if (isHovered) {
      style.border = `12px solid ${CustomTheme.palette.RedBean.main}`;
      style.background = "white";
      style.color = "black";
    } else {
      style.border = "none";
      style.background = CustomTheme.palette.BobaHighlight.main;
      style.color = "white";
    }
  }

  return (
    <Grid
      item
      key={item.title}
      style={style}
      onClick={handleClick}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      {isSelected && (
        <>
          <Box component="img" src={item.icon} alt={`${item.title} icon`} />
          <Typography variant="CustomHeading3" sx={{ color: "white" }}>
            {item.title}
          </Typography>
        </>
      )}
      {isHovered && !isSelected && (
        <>
          <Typography variant="CustomHeading3" sx={{ color: "black" }}>
            {item.title}
          </Typography>
          <Typography variant="CustomBody" sx={{ color: "black" }}>
            {item.info}
          </Typography>
        </>
      )}
      {!isSelected && !isHovered && (
        <>
          <Box component="img" src={item.icon} alt={`${item.title} icon`} />
          <Typography variant="CustomHeading3" sx={{ color: "white" }}>
            {item.title}
          </Typography>
        </>
      )}
    </Grid>
  );
};

export default QuestionCard;
