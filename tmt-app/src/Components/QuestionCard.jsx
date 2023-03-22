import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
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

  const sx = {
    alignItems: "center",
    borderRadius: "36px",
    boxShadow: "6px 6px 16px rgba(0, 0, 0, 0.16)",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    height: "152px",
    justifyContent: "center",
    margin: "0.6rem",
    maxWidth: "240px",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
  };

  if (isSelected) {
    sx.border = "none";
    sx.background = CustomTheme.palette.ThaiTea.main;
    sx.color = "white";
  } else {
    if (isHovered) {
      sx.border = `12px solid ${CustomTheme.palette.RedBean.main}`;
      sx.background = "white";
      sx.color = "black";
    } else {
      sx.border = "none";
      sx.background = CustomTheme.palette.BobaHighlight.main;
      sx.color = "white";
    }
  }

  return (
    <Box
      key={item.title}
      style={sx}
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
    </Box>
  );
};

export default QuestionCard;
