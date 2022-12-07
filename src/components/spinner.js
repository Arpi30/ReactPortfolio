import React, { useContext } from "react";
import { SpinnerIcon, SpinnerContainer } from "./styledComponents/style";
import { LoadContext } from "./useContext";

export const Spinner = () => {
  const spinnerContext = useContext(LoadContext);

  return (
    <SpinnerContainer
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <SpinnerIcon pending={spinnerContext}>A</SpinnerIcon>
    </SpinnerContainer>
  );
};
