import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { CustomTheme } from "./Styling/CustomStyling.js";
import { ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResultsPage from "./Components/ResultsPage";
import CareerPage from "./Components/CareerPage";
import MajorPage from "./Components/MajorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
  {
    path: "/major",
    element: <MajorPage />,
  },
  {
    path: "/career/:career",
    element: <CareerPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={CustomTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
