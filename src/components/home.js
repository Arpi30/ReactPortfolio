import React, { useState } from "react";
import {
  MainContent,
  LandingPageName,
  ButtonContainer,
  HomeButton,
  HomeContainer,
  LandingPageLastName,
} from "./styledComponents/style";
import { Form } from "./form";
import { useTransition, animated } from "react-spring";
import { useWindowResize } from "./hooks/useWindowResize";

export const Home = () => {
  const [formState, setFormState] = useState(false);
  const size = useWindowResize();

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
        <div>
          {transition((style, item) =>
            item ? (
              <animated.div style={style}>
                <Form close={() => setFormState(!formState)} />
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </MainContent>
    </div>
  );
};
