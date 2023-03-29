import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import AnatomyIcon from "../Images/icons/anatomy.svg";
import QuestionCard from "./QuestionCard";

function Questions() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else if (selectedItems.length < 5) {
      setSelectedItems([...selectedItems, item]);
      //Set BobaBot text to warn user of limit restriction
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("selectedItems", selectedItems.join(","));
    window.history.replaceState({}, "", `?${searchParams.toString()}`);
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const itemsString = searchParams.get("selectedItems");
    if (itemsString) {
      const itemsArray = itemsString.split(",");
      setSelectedItems(itemsArray);
    }
  }, []);

  return (
    <Container>
      <Grid container justifyContent="center">
        {TEST_ITEMS.map((item) => (
          <Grid item key={item.title}>
            <QuestionCard
              item={item}
              onClick={() => handleSelect(item.title)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Questions;

const TEST_ITEMS = [
  {
    title: "Anatomy",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
  {
    title: "History",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
  {
    title: "Geography",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
  {
    title: "Math",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
  {
    title: "Computer Science",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
  {
    title: "English",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
  {
    title: "Political Science",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
  {
    title: "Philosophy",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
  {
    title: "Home Studies",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
  {
    title: "Nursing",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
  {
    title: "Keyboard",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
  {
    title: "Woodwork",
    info: "Information for Anatomy.",
    icon: AnatomyIcon,
  },
];
