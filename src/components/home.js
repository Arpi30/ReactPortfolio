import React, { useState, useEffect, useContext } from "react";
import {
  MainContent,
  LandingPageName,
  ButtonContainer,
  HomeButton,
  HomeContainer,
  LandingPageLastName,
  FormContainer,
} from "./styledComponents/style";
import { Form } from "./form";
import { useTransition, animated } from "react-spring";
import { useWindowResize } from "./hooks/useWindowResize";
import { Spinner } from "./spinner";
import { LoadContext } from "./useContext";

export const Home = () => {
  const [formState, setFormState] = useState(false);
  const size = useWindowResize();
  const [pending, setPending] = useContext(LoadContext);

  useEffect(() => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 2000);
  }, []);

  const transition = useTransition(formState, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: {
      x: 0,
      y: size.width === 425 || size.height === 780 ? -330 : -200,
      opacity: 1,
    },
    leave: { x: 0, y: 100, opacity: 0 },
  });

  return (
    <div>
      {pending ? (
        <Spinner />
      ) : (
        <MainContent>
          <HomeContainer>
            <div>
              <LandingPageName>
                <LandingPageLastName>Ács</LandingPageLastName> Árpád
              </LandingPageName>
            </div>
            <ButtonContainer>
              <HomeButton onClick={() => setFormState(!formState)}>
                Write on me
              </HomeButton>
              <HomeButton href="https://aaresume.hu">View CV</HomeButton>
            </ButtonContainer>
          </HomeContainer>
          <FormContainer>
            {transition((style, item) =>
              item ? (
                <animated.div style={style}>
                  <Form close={() => setFormState(!formState)} />
                </animated.div>
              ) : (
                ""
              )
            )}
          </FormContainer>
        </MainContent>
      )}
    </div>
  );
};
