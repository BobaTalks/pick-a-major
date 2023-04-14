import React, { Fragment } from "react";
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
    <Fragment>
      {dummyData.map((item) => {
        return (
          <Link
            rel="noopener noreferrer"
            to={`/career/${item.name}`}
            style={{
              textDecoration: "none",
            }}
            key={item.id}
          >
            <Card
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
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="CustomHeading1"
                    sx={{
                      display: "block",
                      width: "85%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "normal",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <EmotionalIntelligence fill="#F6A794" />
                </Container>
                <Typography
                  variant="CustomBody"
                  sx={{
                    display: "block",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
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
          </Link>
        );
      })}
    </Fragment>
  );
}

export default CustomCard;
