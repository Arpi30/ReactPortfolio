import React, { useContext, useEffect, useState } from "react";
import { LoadContext } from "./useContext";
import { Spinner } from "./spinner";
import {
  HTML,
  IntroText,
  AboutContainer,
  TaskField,
  TaskFieldContent,
  TaskCardTitle,
  TaskBar,
} from "./styledComponents/style";

export const About = () => {
  const [spinner, setSpinner] = useContext(LoadContext);
  const [taskbar] = useState({
    html: ["70%", "#eb7134"],
    css: ["75%", "#347aeb"],
    js: ["50%", "#ebeb34"],
    Bootstrap: ["50%", "#7134eb"],
    react: ["40%", "#343aeb"],
    git: ["55%", "#b55a05"],
  });
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  }, []);
  return (
    <div>
      {spinner ? (
        <Spinner />
      ) : (
        <div>
          <AboutContainer className="container">
            <IntroText className="introText">
              <span>
                "Magasszintű informatikai érdeklődésem miatt nem jelent
                problémát egy szoftver elsajátítása, legutóbbi munkahelyemen
                ahol 3 és fél évet dolgoztam szintén az ipari gépek
                programozását és adatbázisát kellet elsajátítanom. Autódidakta
                módon fejlesztem magam a programozás világában és az eddig
                megszerzett tudásommal úgy érzem hogy a cég nö vekedését
                támogathatom."
              </span>
            </IntroText>
            <h1 style={{ textAlign: "start", padding: "5px" }}>
              Folyamatban...
            </h1>
            <TaskField className="taskField">
              <HTML className="HTML">
                <TaskFieldContent className="content">
                  <TaskCardTitle style={{ background: "rgba(247, 87, 7, .5)" }}>
                    HTML
                  </TaskCardTitle>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.html[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </HTML>
              <HTML className="HTML">
                <TaskFieldContent className="content">
                  <TaskCardTitle style={{ background: "rgba(7, 55, 247, .5)" }}>
                    CSS
                  </TaskCardTitle>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.css[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </HTML>
              <HTML className="HTML">
                <TaskFieldContent className="content">
                  <TaskCardTitle
                    style={{ background: "rgba(247, 239, 7, .5)" }}>
                    Javascript
                  </TaskCardTitle>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.js[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </HTML>
              <HTML className="HTML">
                <TaskFieldContent className="content">
                  <TaskCardTitle style={{ background: "rgba(84, 5, 181, .5)" }}>
                    Bootstrap
                  </TaskCardTitle>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.Bootstrap[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </HTML>
              <HTML className="HTML">
                <TaskFieldContent className="content">
                  <TaskCardTitle style={{ background: "rgba(5, 61, 181, .5)" }}>
                    React
                  </TaskCardTitle>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.react[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </HTML>
              <HTML className="HTML">
                <TaskFieldContent className="content">
                  <TaskCardTitle style={{ background: "rgba(181, 90, 5, .7)" }}>
                    GIT
                  </TaskCardTitle>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.git[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </HTML>
            </TaskField>
          </AboutContainer>
        </div>
      )}
    </div>
  );
};
