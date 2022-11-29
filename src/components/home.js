import React, { useState } from "react";
import {
  MainContent,
  Name,
  ButtonContainer,
  HomeButton,
} from "./styledComponents/style";
import { Form } from "./form";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import "../App.css";
export const Home = () => {
  const [formState, setFormState] = useState(false);
  const FormTransition = formState ? (
    <Form close={() => setFormState(!formState)} />
  ) : (
    ""
  );

  return (
    <MainContent>
      <div className="container">
        <Name>Acs Arpd</Name>
        <ButtonContainer>
          <HomeButton onClick={() => setFormState(!formState)}>
            Write on me
          </HomeButton>
          <HomeButton>download CV</HomeButton>
        </ButtonContainer>
        <CSSTransition in={formState} timeout={5000} classNames="form">
          <div>{FormTransition}</div>
        </CSSTransition>
      </div>
    </MainContent>
  );
};
