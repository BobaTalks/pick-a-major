import React from "react";
import { AppBar, Container, Toolbar, Box, Typography } from "@mui/material";
import OrgLogo from "../Images/Placeholder.png";
import { Link } from "react-router-dom";

function NavBar() {
  const tabs = [
    {
      name: "Majors & Careers",
      path: "/",
    },
    {
      name: "Team",
      path: "/",
    },
    {
      name: "Take the Quiz",
      path: "/quiz/classes",
    },
  ];
  return (
    <AppBar sx={{ position: "sticky", backgroundColor: "BTMilkTea.main" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <img src={OrgLogo} alt="logo" />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            {tabs.map((tab, id) => {
              return (
                <Link key={id} to={tab.path}>
                  <Typography variant="h6">{tab.name}</Typography>
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;