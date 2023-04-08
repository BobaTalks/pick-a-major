import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import { ReactComponent as EmotionalIntelligence } from "../Images/icons/emotional_intelligence.svg";

function MajorCard() {
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
      {dummyData.map((item) => {
        return (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "Matcha.main",
              borderRadius: "15px",
              color: "white",
              ":hover": {
                color: "black",
                backgroundColor: "BTMilkTea.main",
              },
            }}
          >
            <CardMedia
              component="img"
              image={item.icon}
              alt="icon"
              sx={{
                padding: {
                  xs: "0.75rem",
                  sm: "1.5rem",
                  lg: "2rem",
                },
                margin: "1rem",
                height: {
                  xs: "50px",
                },
                width: {
                  xs: "50px",
                },
                borderRadius: "5px",
                backgroundColor: "BobaHighlight.main",
              }}
            />
            <CardContent
              sx={{
                display: "inline-block",
                width: "100%",
                overflow: "hidden",
                whiteSpace: "nowrap",
                padding: {
                  xs: "0.25rem 1rem",
                  md: "0.50rem 1.50rem",
                  lg: "1rem 2rem",
                },
              }}
            >
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="CustomHeading1"
                  sx={{
                    display: "block",
                    width: "100%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.name}
                </Typography>
                <EmotionalIntelligence fill="#F6A794" />
              </Container>
              <Typography
                variant="CustomBody"
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "2",
                  whiteSpace: "normal",
                  maxWidth: "70%",
                  margin: "0.25rem 0",
                }}
              >
                {item.desc}
              </Typography>
              <Typography
                variant="customBody"
                sx={{
                  fontWeight: "bold",
                  paddingTop: "1rem",
                }}
              >
                Read More
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
}

export default MajorCard;
