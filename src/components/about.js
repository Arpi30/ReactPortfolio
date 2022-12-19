import React, { useContext, useEffect, useState } from "react";
import { LoadContext } from "./useContext";
import { Spinner } from "./spinner";
import { MdLiveHelp } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import {
  Card,
  IntroText,
  AboutContainer,
  TaskField,
  TaskFieldContent,
  TaskCardTitle,
  TaskBar,
  HeaderOption,
  HeaderOptionSpan,
  HeaderOptionContainer,
  HeaderOptionSpanCOntainer,
} from "./styledComponents/style";

export const About = () => {
  const [headerOption, setHeaderOption] = useState({
    html: false,
    css: false,
    js: false,
    bs: false,
    react: false,
    git: false,
  });
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
                megszerzett tudásommal úgy érzem hogy a leendő munkahelyem
                növekedését támogathatom."
              </span>
            </IntroText>
            <h1 style={{ textAlign: "start", padding: "5px" }}>
              Folyamatban...
            </h1>
            <TaskField className="taskField">
              <Card>
                <TaskFieldContent className="content">
                  <div
                    className="taskHeader"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <TaskCardTitle
                      style={{ background: "rgba(247, 87, 7, .5)" }}>
                      HTML
                    </TaskCardTitle>
                    <HeaderOption className="option">
                      {headerOption.html && (
                        <HeaderOptionContainer>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <BsFillBookmarkStarFill
                                style={{ marginRight: "4px" }}
                              />
                            </span>
                            Marked
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <FaCommentDots style={{ marginRight: "4px" }} />
                            </span>
                            Comments
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <MdLiveHelp style={{ marginRight: "4px" }} />
                            </span>
                            Help
                          </div>
                        </HeaderOptionContainer>
                      )}
                      <HeaderOptionSpanCOntainer
                        onClick={() =>
                          setHeaderOption((prev) => ({ html: !prev.html }))
                        }>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                      </HeaderOptionSpanCOntainer>
                    </HeaderOption>
                  </div>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.html[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </Card>
              <Card>
                <TaskFieldContent className="content">
                  <div
                    className="taskHeader"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <TaskCardTitle
                      style={{ background: "rgba(7, 55, 247, .5)" }}>
                      CSS
                    </TaskCardTitle>
                    <HeaderOption className="option">
                      {headerOption.css && (
                        <HeaderOptionContainer>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <BsFillBookmarkStarFill
                                style={{ marginRight: "4px" }}
                              />
                            </span>
                            Marked
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <FaCommentDots style={{ marginRight: "4px" }} />
                            </span>
                            Comments
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <MdLiveHelp style={{ marginRight: "4px" }} />
                            </span>
                            Help
                          </div>
                        </HeaderOptionContainer>
                      )}
                      <HeaderOptionSpanCOntainer
                        onClick={() =>
                          setHeaderOption((prev) => ({ css: !prev.css }))
                        }>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                      </HeaderOptionSpanCOntainer>
                    </HeaderOption>
                  </div>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.css[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </Card>
              <Card>
                <TaskFieldContent className="content">
                  <div
                    className="taskHeader"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <TaskCardTitle
                      style={{ background: "rgba(247, 239, 7, .5)" }}>
                      Javascript
                    </TaskCardTitle>
                    <HeaderOption className="option">
                      {headerOption.js && (
                        <HeaderOptionContainer>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <BsFillBookmarkStarFill
                                style={{ marginRight: "4px" }}
                              />
                            </span>
                            Marked
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <FaCommentDots style={{ marginRight: "4px" }} />
                            </span>
                            Comments
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <MdLiveHelp style={{ marginRight: "4px" }} />
                            </span>
                            Help
                          </div>
                        </HeaderOptionContainer>
                      )}
                      <HeaderOptionSpanCOntainer
                        onClick={() =>
                          setHeaderOption((prev) => ({ js: !prev.js }))
                        }>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                      </HeaderOptionSpanCOntainer>
                    </HeaderOption>
                  </div>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.js[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </Card>
              <Card>
                <TaskFieldContent className="content">
                  <div
                    className="taskHeader"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <TaskCardTitle
                      style={{ background: "rgba(84, 5, 181, .5)" }}>
                      Bootstrap
                    </TaskCardTitle>
                    <HeaderOption className="option">
                      {headerOption.bs && (
                        <HeaderOptionContainer>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <BsFillBookmarkStarFill
                                style={{ marginRight: "4px" }}
                              />
                            </span>
                            Marked
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <FaCommentDots style={{ marginRight: "4px" }} />
                            </span>
                            Comments
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <MdLiveHelp style={{ marginRight: "4px" }} />
                            </span>
                            Help
                          </div>
                        </HeaderOptionContainer>
                      )}
                      <HeaderOptionSpanCOntainer
                        onClick={() =>
                          setHeaderOption((prev) => ({ bs: !prev.bs }))
                        }>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                      </HeaderOptionSpanCOntainer>
                    </HeaderOption>
                  </div>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.Bootstrap[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </Card>
              <Card>
                <TaskFieldContent className="content">
                  <div
                    className="taskHeader"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <TaskCardTitle
                      style={{ background: "rgba(5, 61, 181, .5)" }}>
                      React
                    </TaskCardTitle>
                    <HeaderOption className="option">
                      {headerOption.react && (
                        <HeaderOptionContainer>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <BsFillBookmarkStarFill
                                style={{ marginRight: "4px" }}
                              />
                            </span>
                            Marked
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <FaCommentDots style={{ marginRight: "4px" }} />
                            </span>
                            Comments
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <MdLiveHelp style={{ marginRight: "4px" }} />
                            </span>
                            Help
                          </div>
                        </HeaderOptionContainer>
                      )}
                      <HeaderOptionSpanCOntainer
                        onClick={() =>
                          setHeaderOption((prev) => ({ react: !prev.react }))
                        }>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                      </HeaderOptionSpanCOntainer>
                    </HeaderOption>
                  </div>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.react[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </Card>
              <Card>
                <TaskFieldContent className="content">
                  <div
                    className="taskHeader"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <TaskCardTitle
                      style={{ background: "rgba(181, 90, 5, .7)" }}>
                      GIT
                    </TaskCardTitle>
                    <HeaderOption className="option">
                      {headerOption.git && (
                        <HeaderOptionContainer>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <BsFillBookmarkStarFill
                                style={{ marginRight: "4px" }}
                              />
                            </span>
                            Marked
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <FaCommentDots style={{ marginRight: "4px" }} />
                            </span>
                            Comments
                          </div>
                          <div style={{ fontSize: "10px" }}>
                            <span>
                              <MdLiveHelp style={{ marginRight: "4px" }} />
                            </span>
                            Help
                          </div>
                        </HeaderOptionContainer>
                      )}
                      <HeaderOptionSpanCOntainer
                        onClick={() =>
                          setHeaderOption((prev) => ({ git: !prev.git }))
                        }>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                        <HeaderOptionSpan></HeaderOptionSpan>
                      </HeaderOptionSpanCOntainer>
                    </HeaderOption>
                  </div>
                  <p style={{ textAlign: "justify" }} className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <TaskBar
                    taskbarprozent={taskbar.git[0]}
                    className="taskbar"></TaskBar>
                </TaskFieldContent>
              </Card>
            </TaskField>
          </AboutContainer>
        </div>
      )}
    </div>
  );
};
