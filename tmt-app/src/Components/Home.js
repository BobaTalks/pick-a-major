import React, { useState } from "react";
import { PrimaryBtn, FlexContainer } from "../Styling/CustomStyling.js";
import { Container, Typography, Button, Box } from "@mui/material";
import MilkTeaBlob from "../Images/MilkTeaBlob.png";
import LycheeRectangle from "../Images/LycheeRectangle.png";
import MilkTeaSwiggle2 from "../Images/MilkTeaSwiggle2.png";
import ThaiTeaSwiggle1 from "../Images/ThaiTeaSwiggle1.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Breadcrumb from "./Breadcrumb";
import MajorCareerList from "./MajorCareerList.js";
import GuideSidebar from "./GuideSidebar.js";

function Home() {
  const [displayGuide, setDisplayGuide] = useState(false);
  const toggleDisplayGuide = () => {
    setDisplayGuide((previous) => !previous);
  };

  return (
    <Container
      sx={{
        minWidth: "100%",
        paddingTop: "7.5rem",
        minHeight: "100vh",
        overflow: {
          xs: "hidden",
          sm: "hidden",
          md: "hidden",
          lg: "visible",
        },
      }}
    >
      <Breadcrumb />
      <FlexContainer sx={{ paddingY: "6.25rem" }}>
        <Container
          sx={{
            position: "absolute",
            top: "0",
            zIndex: "-1500",
            minWidth: "1585px",
            paddingY: "2rem",
          }}
        >
          <img
            src={MilkTeaBlob}
            alt="MilkTeaBlob"
            style={{
              position: "relative",
              top: "0",
              width: "100%",
              height: "575px",
              transform: "rotateX(180deg)",
            }}
          />
        </Container>
        <FlexContainer sx={{ flexDirection: "column", position: "none" }}>
          <Container sx={{ textAlign: "center", paddingBottom: "1.5rem" }}>
            <Typography variant="CustomTitle" sx={{ color: "Boba.main" }}>
              Can&apos;t decide between majoring in business, biology, or art?
            </Typography>
          </Container>
          <Container
            sx={{ textAlign: "center", marginY: "1.75rem" }}
            maxWidth="md"
          >
            <Typography variant="CustomHeading3">
              No one can master multiple subjects the way you do. Spend 2
              minutes with us to find the perfect major for you!
            </Typography>
          </Container>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer sx={{ minWidth: "100%" }}>
        <FlexContainer
          sx={{
            position: "absolute",
            justifyContent: "space-between",
            flexDirection: "row",
            zIndex: "-1000",
            minWidth: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img
              src={LycheeRectangle}
              alt="LycheeRectangle"
              style={{
                width: "150%",
                verticalAlign: "middle",
                transform: "rotate(133.23deg)",
              }}
            />
            <img
              src={MilkTeaSwiggle2}
              alt="MilkTeaSwiggle2"
              style={{
                width: "250%",
                transform: "rotate(32.27deg)",
                position: "absolute",
                left: "-60%",
                top: "15%",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "relative",
              right: "-2.5%",
              display: {
                xs: "none",
                md: "none",
                lg: "block",
              },
            }}
          >
            <img
              src={ThaiTeaSwiggle1}
              alt="ThaiTeaSwiggle1"
              style={{
                width: "100%",
                transform: "rotate(-33.7deg)",
              }}
            />
          </Box>
        </FlexContainer>
        <FlexContainer
          sx={{
            flexDirection: "column",
            height: "auto",
          }}
        >
          <PrimaryBtn sx={{ color: "#FFFFFF" }}>
            <Typography variant="CustomHeading2">Take the Quiz</Typography>
          </PrimaryBtn>

          <FlexContainer sx={{ marginTop: "4.5rem", flexDirection: "column" }}>
            <Button
              onClick={toggleDisplayGuide}
              sx={{
                color: "black",
                textDecoration: "underline",
              }}
            >
              <Typography variant="CustomSubHeading">
                See all Majors/Careers
              </Typography>
              {displayGuide ? (
                <ArrowUpwardIcon
                  sx={{ paddingTop: "3px", paddingLeft: "10px" }}
                />
              ) : (
                <ArrowDownwardIcon
                  sx={{ paddingTop: "3px", paddingLeft: "10px" }}
                />
              )}
            </Button>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <Container
        sx={{
          marginY: "5rem",
          opacity: displayGuide ? "100%" : "0%",
          visibility: displayGuide ? "visible" : "hidden",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 0)",
          top: displayGuide ? { sm: "750px", md: "850px", lg: "950px" } : "0px",
          zIndex: "1500",
        }}
      >
        <FlexContainer
          sx={{
            alignItems: "flex-start",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <MajorCareerList />
          <GuideSidebar toggleButton={false} />
        </FlexContainer>
      </Container>
    </Container>
  );
}

export default Home;
