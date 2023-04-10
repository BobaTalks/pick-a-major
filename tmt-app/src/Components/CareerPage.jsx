import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CareerPage() {
  const { state } = useLocation();

  useEffect(() => {
    console.log("testing", state.data);
  }, [state]);

  return <div>{state.data[0].name}</div>;
}

export default CareerPage;
