import React, { useState } from "react";

import {
  StyledForm,
  InputFields,
  Inputs,
  FormSubmit,
} from "./styledComponents/style";
import { AiFillCloseSquare } from "react-icons/ai";

export const Form = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const email = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  return (
    <StyledForm>
      <div className="container">
        <div className="closeForm">
          <AiFillCloseSquare onClick={props.close} size={20} />
        </div>
        <div className="headerContainer">
          <h1
            style={{
              color: "white",
              borderBottom: "1px solid white",
              marginBottom: "5px",
            }}>
            Contact Us
          </h1>
          <p style={{ color: "white" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <InputFields className="InputsFields">
          <Inputs type="text" placeholder="Name"></Inputs>
          <Inputs
            type="email"
            placeholder="Email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className={email.test(emailValue) ? "valid" : "invalid"}
            email={email.test(emailValue)}></Inputs>
          <Inputs type="text" placeholder="Message"></Inputs>
        </InputFields>
        <FormSubmit>Submit</FormSubmit>
      </div>
    </StyledForm>
  );
};
