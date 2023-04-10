import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";
import { ReactComponent as EmotionalIntelligence } from "../Images/icons/emotional_intelligence.svg";
import { Link } from "react-router-dom";

function CustomCard({ dummyData }) {
  return (
    <Link
      rel="noopener noreferrer"
      to="/careerpage"
      state={{ data: dummyData }}
      style={{
        textDecoration: "none",
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
              marginTop: "1rem",
              ":hover": {
                color: "black",
                backgroundColor: "BTMilkTea.main",
              },
              cursor: "pointer",
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
                    width: "85%",
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
    </Link>
  );
}

export default CustomCard;
