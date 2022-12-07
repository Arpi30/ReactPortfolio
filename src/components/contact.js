import React, { useContext, useEffect } from "react";
import { LoadContext } from "./useContext";
import { Spinner } from "./spinner";

export const Contact = () => {
  const [spinner, setSpinner] = useContext(LoadContext);
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  }, []);
  return <div>{spinner ? <Spinner /> : <div>Contact</div>}</div>;
};
