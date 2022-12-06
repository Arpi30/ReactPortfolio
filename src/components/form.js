import React, { useEffect, useState } from "react";

import {
  StyledForm,
  InputFields,
  Inputs,
  FormSubmit,
} from "./styledComponents/style";
import { AiFillCloseSquare } from "react-icons/ai";

export const Form = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const email = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  const userName = /^[\w\d\s.áéíóőúű]{5,20}$/i;
  const textMessage = /^[\w\d\s.áéíóőúű]{5,200}$/i;
  function changeValue(e, setVal) {
    setVal(e.target.value);
  }

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
          <Inputs
            onChange={(e) => changeValue(e, setName)}
            reg={userName.test(name)}
            type="text"
            placeholder="Name"></Inputs>
          <Inputs
            type="email"
            placeholder="Email"
            value={emailValue}
            onChange={(e) => changeValue(e, setEmailValue)}
            className={email.test(emailValue) ? "valid" : "invalid"}
            reg={email.test(emailValue)}></Inputs>
          <Inputs
            onChange={(e) => changeValue(e, setMessage)}
            reg={textMessage.test(message)}
            type="text"
            placeholder="Message"></Inputs>
        </InputFields>
        <FormSubmit>Submit</FormSubmit>
      </div>
    </StyledForm>
  );
};
