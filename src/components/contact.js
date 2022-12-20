import React, { useContext, useEffect } from "react";
import { LoadContext } from "./useContext";
import { Spinner } from "./spinner";
import { Form } from "./form";
import { Ul, ContactContainer } from "./styledComponents/style";

export const Contact = () => {
  const [spinner, setSpinner] = useContext(LoadContext);
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      {spinner ? (
        <Spinner />
      ) : (
        <div>
          <ContactContainer>
            <Ul style={{ alignItems: "center" }}>
              <h1
                style={{
                  width: "100%",
                  letterSpacing: "8px",
                  marginBottom: "20px",
                }}>
                <span>&#60;</span>GET
                <div
                  style={{
                    color: "white",
                    display: "inline-block",
                    background: "black",
                    paddingLeft: "8px",
                  }}>
                  IN
                </div>
                TOUCH<span>&#62;</span>
              </h1>
              <li>+36-30/123-4567</li>
              <li>Szeged, Magyarorszag</li>
              <li>Kivancsi Fancsi utca 135.</li>
              <p>
                Köszönöm hogy megtekintetted az oldalt, várom jelentkezésed!
              </p>
            </Ul>

            <div style={{ position: "relative", marginTop: "-150px" }}>
              <Form />
            </div>
          </ContactContainer>
        </div>
      )}
    </div>
  );
};
