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
    alignItems: "center",
    borderRadius: "36px",
    boxShadow: "6px 6px 16px rgba(0, 0, 0, 0.16)",
    display: "flex",
    flex: "none",
    flexDirection: "column",
    flexGrow: 0,
    gap: "0.5rem",
    justifyContent: "center",
    margin: "0.6rem",
    minHeight: "152px",
    padding: "1rem",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    width: "240px",
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
